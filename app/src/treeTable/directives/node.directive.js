/**
 * Created by yaoshining on 16/3/14.
 */

function linkFunc(scope, elem) {

}

function NodeDirectiveFactory() {
    let directive = {
        restrict: 'AE',
        scope: false,
        link: linkFunc,
        controller: EbpTreeTableNodeController,
        controllerAs: '$node'
    };

    return directive;
}

function initNode($scope, $element, $compile, $timeout) {
    'ngInject';
    let node = $scope.node;
    let treeTable = $scope.$ebpTreeTable;
    let events = treeTable.events;
    this.render = () => {
        let tpl = `<td class="ebp-tt-index-cell"><%- index+1%></td>
                   <td class="ebp-tt-level-cell"><%- levelNum%></td>`;
        let levelNum = this.levelNum;
        let compiled = _.template(tpl);
        let el = $(compiled({
            index: $element.index(),
            node,
            levelNum
        }));
        $element.html(el);
        renderCell.apply(this, [
            $element,
            treeTable,
            node,
            $compile,
            $scope
        ]);
    };
    $timeout(this.render, 0);
    this.edit = () => {
        let callback = (data) => {
            _.merge(node, data);
            $scope.$apply();
            this.render();
        };
        events.edit(angular.copy(node, {}), callback);
    };
    this.remove = () => {
        if(!confirm("确定删除此条记录以及所有子记录吗?")) {
            return;
        }
        let callback = () => {
            let result = _.remove(treeTable.data, (item) => {
                return item.id === node.id;
            });
            if(result.length > 0) {
                removeChildren(this.$children);
                let parent = this.$parent;
                if(parent) {
                    _.remove(parent.$children, (item) => {
                        return item === this;
                    });
                    parent.refreshLevelNum();
                } else {
                    treeTable.refreshLevelNum();
                }
                this.$destroy();
                treeTable.reIndex();
            }
        };
        events.remove(node, callback);
        // treeTable.$dropRepo.remove({
        //     id: node.id
        // }, () => {
        //     let result = _.remove(treeTable.data, (item) => {
        //         return item.id === node.id;
        //     });
        //     if(result.length > 0) {
        //         removeChildren(this.$children);
        //         let parent = this.$parent;
        //         if(parent) {
        //             _.remove(parent.$children, (item) => {
        //                 return item === this;
        //             });
        //             parent.refreshLevelNum();
        //         } else {
        //             treeTable.refreshLevelNum();
        //         }
        //         this.$destroy();
        //         treeTable.reIndex();
        //     }
        // }, () => {
        //     //only for tests
        //     let result = _.remove(treeTable.data, (item) => {
        //         return item.id === node.id;
        //     });
        //     if(result.length > 0) {
        //         removeChildren(this.$children);
        //         let parent = this.$parent;
        //         if(parent) {
        //             _.remove(parent.$children, (item) => {
        //                 return item === this;
        //             });
        //             parent.refreshLevelNum();
        //         } else {
        //             treeTable.refreshLevelNum();
        //         }
        //         this.$destroy();
        //         treeTable.reIndex();
        //     }//end
        // });

        function removeChildren(children) {
            let subChildren = getSubChildren(children);
            angular.forEach(subChildren, (node) => {
                _.remove(treeTable.data, (item) => {
                    return item.id === node.data.id;
                });
                node.$destroy();
            });
            function getSubChildren(children) {
                let nodes = children;
                angular.forEach(children, (item) => {
                    if(item.$children) {
                        nodes.push(...getSubChildren(item.$children));
                    }
                });
                return nodes;
            }
        }
    };

    this.add = () => {

        let callback = (index, newNode) => {
            if(!newNode || this.$children && index >= this.$children.length) {
                return;
            }
            treeTable.add(index, this, newNode);
            this.checked = false;
        };

        if(node.isParent) {
            if(this.loaded) {
                let children = [];
                angular.forEach(this.$children, (child) => {
                    children.push(child.data);
                });
                events.add(node, children, callback);
            } else {
                treeTable.retrieve(this).$promise.then((data) => {
                    events.add(node, data, callback);
                });
            }
        } else {
            events.add(node, null, callback);
        }
        this.$el.addClass('open');
    };

    $element.on({
        click: () => {
            let checkeState = !this.checked;
            treeTable.checkAll(false);
            this.checked = checkeState;
        }
    });
}

function renderCell(el, treeTable, node, $compile, $scope) {
    let colDefs = treeTable.colDefs;
    angular.forEach(colDefs, (col) => {
        let compiled = _.template(`<td><%- node[col.name]%></td>`);
        let elem = $(compiled({
            node,
            col
        }));
        let value = node[col.name];
        if(col.tpl) {
            let contentEl = angular.element('<div>').html(col.tpl);
            elem.html(contentEl);
            $compile(contentEl)($scope);
            $('.fa', contentEl).click(event => event.stopPropagation());
            elem.addClass('ebp-tt-func-cell');
        } else {
            if(col.type === 'progressBar') {
                initProgressBar(elem, {
                    value
                });
                elem.addClass('ebp-tt-comp-cell');
            }
            if(col.type === 'crud') {
                let addBtn = $('<a>').addClass('ebp-tt-btn ebp-tt-btn-add');
                // let editBtn = $('<a>').addClass('ebp-tt-btn ebp-tt-btn-edit');
                let delBtn = $('<a>').addClass('ebp-tt-btn ebp-tt-btn-delete');
                addBtn.click((event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    this.add();
                });
                // editBtn.click((event) => {
                //     event.preventDefault();
                //     event.stopPropagation();
                //     this.edit();
                // });
                delBtn.click((event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    this.remove();
                });
                elem.append(addBtn)
                    // .append(editBtn)
                    .append(delBtn);
            }
        }
        if(col.checkable) {
            let checkHandler = $('<label>').addClass('ebp-tt-checkbox');
            let checkbox = $('<input />', {
                type: 'checkbox'
            });
            checkHandler.append(checkbox);
            checkHandler.append('<span>');
            elem.prepend(checkHandler);
            checkbox.on({
                change: () => {
                    let state = checkbox.is(':checked');
                    $scope.$broadcast('ebp-tt-node-check', state);
                }
            });
            checkHandler.click((event) => event.stopPropagation());
        }
        if(col.expandable) {
            let indent = 20 * ($scope.level - 1);
            elem.css({
                'text-indent': indent + 'px'
            });
            this.expandHandler = $('<i>').addClass('ebp-tt-expand-handler');
            elem.prepend(this.expandHandler);
            this.expandHandler.on('click', (event) => {
                event.stopPropagation();
                if(el.is('.open')) {
                    collapseNodes(el, this.$children);
                } else {
                    expandNodes.apply(this);
                }
            });
            if(!node.isParent) {
                this.expandHandler.css('visibility', 'hidden');
            }
            this.expand = expandNodes;
        }
        el.append(elem);
    });

    function expandNodes() {
        if(!this.loaded) {
            treeTable.retrieve(this);
            this.checked = false;
        }
        angular.forEach(this.$children, (node) => {
            node.$el.removeClass('hidden');
        });
        el.addClass('open');
    }

    function collapseNodes(el, nodes) {
        angular.forEach(nodes, (node) => {
            node.$el.addClass('hidden');
            if(node.$children) {
                collapseNodes(node.$el, node.$children);
            }
        });
        el.removeClass('open');
    }
}

function initProgressBar(cell, settings) {
    let progressbar = new EbpTreeTableProgressbar(settings);
    cell.html(progressbar.el);
}

class EbpTreeTableProgressbar {
    constructor(settings) {
        this.el = $(`<div class="ebp-tt-progressbar">
                    </div>`);
        this.bar = $(`<div class="ebp-tt-progressbar-inner">
                        </div>`);
        this.el.append(this.bar);
        this.value = settings.value;
        this.render();
    }

    render() {
        if(this.value > 0) {
            this.bar.show();
        } else {
            this.bar.hide();
        }
        setTimeout(() => {
            this.bar.width(this.value + '%');
        }, 0);
    }

}

class EbpTreeTableNodeController {
    constructor($injector, $scope, $element) {
        'ngInject';
        let treeTable = $scope.$ebpTreeTable;
        let checked = false;
        $injector.invoke(initNode, this, {
            $scope,
            $element
        });
        this.$el = $element;
        Object.defineProperties(this, {
            data: {
                get: () => {
                    return $scope.node;
                }
            },
            $level: {
                get: () => {
                    return $scope.level;
                }
            },
            loaded: {
                get: () => {
                    return angular.isArray(this.$children) && this.$children.length > 0;
                }
            },
            $parent: {
                get: () => {
                    return $scope.$parent.$node;
                }
            },
            levelIndex: {
                get: () => {
                    let index = 0;
                    if(!this.$parent) {
                        index = _.indexOf(treeTable.data, this.data);
                    } else {
                        index = _.indexOf(this.$parent.$children, this);
                    }
                    return index;
                }
            },
            levelNum: {
                get: () => {
                    let levelNum = '';
                    let parent = this;
                    while(parent) {
                        levelNum = (parent.levelIndex + 1) + '.' + levelNum;
                        parent = parent.$parent;
                    }
                    return levelNum.substring(0, levelNum.length - 1);
                }
            },
            isParent: {
                get: () => {
                    return this.data.isParent;
                },
                set: (state) => {
                    if(state) {
                        this.expandHandler.css('visibility', 'visible');
                    }
                    this.data.isParent = state;
                }
            },
            checked: {
                get: () => {
                    return checked;
                },
                set: (state) => {
                    checked = state;
                    let checkboxes = $('.ebp-tt-checkbox > input', $element);
                    if(checked) {
                        treeTable.checkedNodes.push(this);
                        $element.addClass('checked');
                        checkboxes.prop('checked', true);
                    } else {
                        _.remove(treeTable.checkedNodes, (node) => {
                            return node === this;
                        });
                        $element.removeClass('checked');
                        checkboxes.prop('checked', false);
                    }
                }
            }
        });
        if($scope.$parent.$node) {
            this.$parent.$children = this.$parent.$children || [];
            let index = $element.data('index');
            if(angular.isUndefined(index)) {
                index = this.$parent.$children.length;
            } else {
                setTimeout(() => {
                    this.$parent.refreshLevelNum();
                }, 0);
            }
            this.$parent.$children.splice(index, 0, this);
            this.$parent.isParent = true;
        }
        if($scope.level === 1) {
            treeTable.$children.push(this);
        }
        $scope.$on('ebp.tt.refreshLevelNum', () => {
            this.$el.find('.ebp-tt-level-cell').text(this.levelNum);
        });

        this.refreshLevelNum = () => {
            $scope.$broadcast('ebp.tt.refreshLevelNum');
        };

        this.$destroy = () => {
            $element.remove();
            $scope.$destroy();
        };

        $scope.$on('ebp-tt-node-check', (event, state) => {
            this.checked = state;
            if(this.$parent) {
                this.$parent.checked = _.every(this.$parent.$children, 'checked');
            }
        });

    }

}

export default NodeDirectiveFactory;