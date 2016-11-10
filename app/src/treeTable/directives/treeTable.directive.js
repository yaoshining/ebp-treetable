/**
 * Created by yaoshining on 16/3/1.
 */
import {directiveNames} from '../config';

function initScroller(contentWrapper, headerWrapper) {
    contentWrapper.on('scroll', () => {
        let scrollLeft = contentWrapper.prop('scrollLeft');
        headerWrapper.css({
            transform: `matrix(1, 0, 0, 1, ${-scrollLeft}, 0)`
        });
    });
}

function TreeTableDirectiveFactory($templateRequest, $compile) {
    'ngInject';
    function compileFunc() {
        let tplLoader = $templateRequest('src/treeTable/templates/treeTable.tpl.html');
        return {
            post: (scope, elem, attrs, treeTable) => {
                elem.addClass('ebp-tt-container');
                tplLoader.then(tpl => {
                    elem.append($compile(tpl)(scope));
                    let tableWidth = elem.find('table').width();
                    let containerWidth = elem.width();
                    let contentWrapper = $('.ebp-tt-content-wrapper');
                    let headerWrapper = $('.ebp-tt-header-wrapper');
                    if(tableWidth <= containerWidth) {
                        elem.find('table').width('100%');
                    }
                    initScroller(contentWrapper, headerWrapper);
                    treeTable.render();
                });
            }
        };
}

    let directive = {
        restrict: 'AE',
        compile: compileFunc,
        scope: true,
        controller: TreeTableController,
        controllerAs: '$ebpTreeTable'
    };

    return directive;
}

function initSettings(settings) {
    this.settings = {
        expandAll: settings.expandAll
    };
    this.colDefs = _.sortBy(settings.colDefs || [], function(col) {
        return col.index;
    });
    this.events = settings.events;
}

function initDataSource($resource, settings) {
    'ngInject';
    let dataSource = settings.dataSource;
    if(dataSource.read) {
        this.$readRepo = $resource(dataSource.read.url, dataSource.read.params);
    }
}

function initTreeTable($element, $compile, $scope, $timeout) {
    'ngInject';
    let wrapper = $element.find('.ebp-tt-content-wrapper');
    let tbody = wrapper.find('tbody');

    tbody.append(nodesGenerator(this.data, $scope, $compile, 1, {
        expand: this.settings.expandAll
    }));

    this.hideIndexCol = () => {
        $element.find('.ebp-tt-index-cell,.ebp-tt-index-col').hide();
    };

    this.resizeCol = (index, width) => {
        let cells = $element.find(`table col:nth-child(${index})`);
        cells.width(width);
    };

    const bubble = this.views.bubble || $('<div>').addClass('ebp-tt-bubble');

    $element.off('mouseover').on({
        mouseover: (event) => {
            const target = event.target,
                  title = target.title || $(target).data('title'),
                  pos = $(target).position(),
                  width = $(target).width(),
                  height = $(target).height();
            if(title) {
                bubble.appendTo($element);
                if(target.title) {
                    $(target).removeAttr('title').data('title', title);
                }
                bubble.removeClass('upward').css({
                    top: pos.top + height + 15,
                    left: pos.left + width/2 + 5
                }).text(title);
                if($element.height() - (pos.top + bubble.height() + height) < 20) {
                    bubble.css({
                        top: pos.top - height - 15
                    }).addClass('upward');
                }
                let timer = $timeout(() => {
                    bubble.fadeIn();
                }, 500);
                $(target).one('mouseout', () => {
                    $timeout.cancel(timer);
                    bubble.stop().hide().detach();
                });
            }
        }
    });

    wrapper.on('scroll', () => bubble.detach());

    this.views = {
        bubble,
        content: {wrapper, tbody}
    };
}

function nodesGenerator(data, $scope, $compile, level, datum) {
    let compiled = _.template('<tr ebp-treetable-node></tr>');
    let elems = $();
    angular.forEach(data, (e) => {
        let el = $(compiled()).data(datum || {});
        let scope = $scope.$new();
        scope.node = e;
        scope.level = level;
        elems = elems.add($compile(el)(scope));
    });
    return elems;
}

class TreeTableController {

    constructor($scope, $attrs, defaultSettings, $element, $injector, $compile, $parse, $q) {
        'ngInject';
        let settingsModel = $parse($attrs[directiveNames.ebpTreeTable]),
            settings = settingsModel.apply(null, [$scope]);
        settings = _.merge({}, defaultSettings, settings);
        initSettings.apply(this, [settings]);
        $injector.invoke(initDataSource, this, {
            settings
        });
        settingsModel.assign($scope.$parent, $injector.instantiate(TreeTableAdapter, {treeTable: this}));
        let _checkedNodes = [];
        let nodesMap = {};
        this.$children = [];
        this.views = {};
        this.remove = node => {
            _.remove(this.data, (item) => item.id === node.id);
        };

        this.checkAll = state => {
            $scope.$broadcast('ebp-tt-node-check', state);
        };

        this.render = () => {
            this.retrieve().then(data => {
                this.data = data;
                $injector.invoke(initTreeTable, this, {
                    $element,
                    $scope
                });
            });
        };

        this.register = node => {
            nodesMap[node.$id] = node;
        };

        this.deregister = node => delete nodesMap[node.$id];

        this.reIndex = () => {
            let elems = $element.find('[ebp-treetable-node]');
            elems.each((i, e) => {
                $(e).find('.ebp-tt-index-cell').text(i+1);
            });
        };

        this.refreshLevelNum = () => {
            $scope.$broadcast('ebp.tt.refreshLevelNum');
        };

        this.resizeMark = {
            left: 0,
            display: 'none'
        };

        this.upgrade = (nodes) => {
            if(!angular.isArray(nodes) || nodes.length < 1) {
                return false;
            }
            if(_.uniq(_.map(nodes, node => nodesMap[node.id].$level)).length > 1) {
                return false;
            }
            if(nodesMap[nodes[0].id].$level > 1) {
                angular.forEach(_.map(nodes, node => nodesMap[node.id]).sort((a, b) => b.levelIndex - a.levelIndex), node => {
                    let next = node.$parent.get(node.levelIndex + 1);
                    node.upgrade(next && !next.checked);
                });
            }
        };

        this.degrade = (nodes, beforeFn) => {
            if(!angular.isArray(nodes) || nodes.length < 1) {
                return false;
            }
            if(_.uniq(_.map(nodes, node => nodesMap[node.id].$level)).length > 1) {
                return false;
            }
            if(!beforeFn) {
                beforeFn = callback => {
                    callback();
                };
            } else if(!angular.isFunction(beforeFn)) {
                throw new Error(`Expect a function to call, but got a/an ${typeof beforeFn}`);
            }
            let pros = [];
            let originals = _.map(nodes, node => {
                let original = nodesMap[node.id];
                if(original.levelIndex > 0) {
                    let defer = $q.defer();
                    node.degrade(() => defer.resolve());
                    pros.push(defer.promise);
                }
                return original;
            }).sort((a, b) => a.levelIndex - b.levelIndex);
            $q.all(pros).then(() => {
                beforeFn(() => angular.forEach(originals, node => node.degrade()));
            });
        };

        Object.defineProperties(this, {
            $el: {
                get: () => $element
            },
            checkedNodes: {
                get: () => _checkedNodes
            },
            $first: {
                get: () => this.$children[0]
            },
            $last: {
                get: () => this.$children[this.$children.length - 1]
            }
        });

        this.get = i => this.$children[i];

        this.findElement = i => $element.find(`[ebp-treetable-node]:eq(${i})`);

        this.retrieve = (node, recursive, collapse) => {
            let parentId = node?node.data.id:0;
            let deferred = $q.defer();
            if(!this.$readRepo) {
                deferred.reject();
            } else {
                this.$readRepo.query({
                    id: parentId
                }, data => {
                    if(node) {
                        this.data.push(...data);
                        let elems = nodesGenerator(data, node.$el.scope(), $compile, node.$level + 1, {
                            expand: recursive
                        });
                        if(collapse) {
                            elems.addClass('hidden');
                        }
                        elems.insertAfter(node.$el);
                        this.reIndex();
                    }
                    deferred.resolve(data);
                });
            }
            return deferred.promise;
        };

        this.$destroy = () => {
            angular.forEach(this.$children, node => {
                angular.forEach(node.descendants, node => {
                    node.$destroy();
                });
                node.$destroy();
            });
            this.$children.length = 0;
            this.views.bubble.detach();
        };

        this.add = (position, node, ...childData) => {
            this.data.push(...childData);
            let index = position || 0, scope = $scope, level = 1;
            let prev = this.get(index - 1);
            if(node) {
                prev = node.get(index - 1);
                index = position + node.$el.index() + 1;
                scope = node.$el.scope();
                level = node.$level + 1;
                node.isParent = true;
            }
            let elems = nodesGenerator(childData, scope, $compile, level, {
                index: position
            });
            let prevElem = [];
            if(prev) {
                if(prev.loaded) {
                    prevElem = prev.$last.$el.next();
                } else {
                    prevElem = prev.$el.next();
                }
            } else {
                prevElem = this.findElement(index);
            }
            if(prevElem.length > 0) {
                elems.insertBefore(prevElem);
            } else {
                elems.appendTo(this.views.content.tbody);
            }
            this.reIndex();
        };

        this.expandAll = () => {
            angular.forEach(this.$children, node => {
                if(node.isParent) {
                    node.expand(true);
                }
            });
        };

        this.collapseAll = () => {
            angular.forEach(this.$children, node => {
                if(node.isParent) {
                    node.collapse();
                }
            });
        };

        this.refresh = params => {
            this.$readRepo = this.$readRepo.bind(params);
            this.$destroy();
            this.render();
        };
    }

}

class TreeTableAdapter {

    constructor(treeTable) {
        'ngInject';
        Object.defineProperties(this, {
            checkedNodes: {
                get: () => treeTable.checkedNodes.map(node => node.adapter)
            },
            children: {
                get: () => treeTable.$children.map(node => node.adapter)
            }
        });
        
        this.insert = (index, newNode) => {
            if(!newNode || treeTable.$children && index > treeTable.$children.length) {
                return;
            }
            treeTable.add(index, null, newNode);
        };

        this.expandAll = () => treeTable.expandAll();

        this.collapseAll = () => treeTable.collapseAll();

        this.upgrade = nodes => treeTable.upgrade(nodes);

        this.degrade = (nodes, beforeFn) => treeTable.degrade(nodes, beforeFn);

        this.refresh = params => treeTable.refresh(params);
    }

}

export default TreeTableDirectiveFactory;