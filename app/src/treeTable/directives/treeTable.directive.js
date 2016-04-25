/**
 * Created by yaoshining on 16/3/1.
 */
import {directiveNames} from '../config';

function initScroller(contentWrapper, headerWrapper) {
    contentWrapper.on('scroll', () => {
        let scrollLeft = contentWrapper.prop('scrollLeft');
        headerWrapper.css({
            transform: `translate(${-scrollLeft}px, 0)`
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
                tplLoader.then((tpl) => {
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

function initTreeTable($element, $compile, $scope) {
    'ngInject';
    let wrapper = $element.find('.ebp-tt-content-wrapper');
    let tbody = wrapper.find('tbody');

    tbody.append(nodesGenerator(this.data, $scope, $compile, 1));

    this.hideIndexCol = () => {
        $element.find('.ebp-tt-index-cell,.ebp-tt-index-col').hide();
    };

    this.resizeCol = (index, width) => {
        let cells = $element.find(`table col:nth-child(${index})`);
        cells.width(width);
    };
}

function nodesGenerator(data, $scope, $compile, level, index) {
    let compiled = _.template('<tr ebp-treetable-node></tr>');
    let elems = $();
    angular.forEach(data, (e) => {
        let el = $(compiled()).data('index', index);
        let scope = $scope.$new();
        scope.node = e;
        scope.level = level;
        elems = elems.add($compile(el)(scope));
    });
    return elems;
}

class TreeTableController {

    constructor($scope, $attrs, defaultSettings, $element, $injector, $compile, $parse) {
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
        this.$children = [];
        this.remove = node => {
            _.remove(this.data, (item) => {
                return item.id === node.id;
            });
        };

        this.checkAll = state => {
            $scope.$broadcast('ebp-tt-node-check', state);
        };

        this.render = () => {
            this.retrieve().$promise.then(data => {
                this.data = data;
                $injector.invoke(initTreeTable, this, {
                    $element,
                    $scope
                });
            });
        };

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

        Object.defineProperties(this, {
            $el: {
                get: () => {
                    return $element;
                }
            },
            checkedNodes: {
                get: () => {
                    return _checkedNodes;
                }
            }
        });

        this.get = (i) => {
            return this.$children[i];
        };

        this.retrieve = node => {
            let parentId = node?node.data.id:0;
            if(!this.$readRepo) {
                return false;
            } else {
                return this.$readRepo.query({
                    id: parentId
                }, data => {
                    if(node) {
                        this.data.push(...data);
                        let elems = nodesGenerator(data, node.$el.scope(), $compile, node.$level + 1);
                        elems.insertAfter(node.$el);
                        this.reIndex();
                    }
                });
            }
        };

        this.add = (position, node, ...childData) => {
            this.data.push(...childData);
            let index = position || 0, scope = $scope, level = 1;
            if(node) {
                index = position + node.$el.index();
                scope = node.$el.scope();
                level = node.$level + 1;
                node.isParent = true;
            }
            let elems = nodesGenerator(childData, scope, $compile, level, position);
            let prevElem = $element.find(`[ebp-treetable-node]:eq(${index})`);
            if(node) {
                elems.insertAfter(prevElem);
            } else {
                elems.insertBefore(prevElem);
            }
            this.reIndex();
        };

    }

}

class TreeTableAdapter {

    constructor(treeTable) {
        'ngInject';
        Object.defineProperties(this, {
            checkedNodes: {
                get: () => {
                    return treeTable.checkedNodes.map(node => {
                        return node.adapter;
                    });
                }
            },
            children: {
                get: () => {
                    return treeTable.$children.map(node => {
                        return node.adapter;
                    });
                }
            }
        });
        
        this.insert = (index, newNode) => {
            if(!newNode || treeTable.$children && index >= treeTable.$children.length) {
                return;
            }
            treeTable.add(index, null, newNode);
        };
    }

}

export default TreeTableDirectiveFactory;