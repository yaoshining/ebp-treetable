/**
 * Created by yaoshining on 16/3/14.
 */

function linkFunc() {

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

function initNode($scope, $element, $templateRequest, $compile) {
    'ngInject';
    let node = $scope.node;
    let treeTable = $scope.$ebpTreeTable;
    let events = treeTable.events;
    let tplLoader = $templateRequest('src/treeTable/templates/row.tpl.html');
    this.render = () => {
        tplLoader.then((tpl) => {
            let compiled = _.template(tpl);
            let el = $(compiled({
                index: $element.index(),
                node
            }));
            $element.html(el);
            renderCell($element, treeTable.colDefs, node, $compile, $scope);
        });
    };
    this.render();
    this.edit = () => {
        let callback = (data) => {
            _.merge(node, data);
            $scope.$apply();
            this.render();
        };
        events.edit(angular.copy(node, {}), callback);
    };
    this.remove = () => {
        if(confirm("确定删除此条记录以及所有子记录吗?")) {
            let result = _.remove(treeTable.data, (item) => {
                return item.id === node.id;
            });
            if(result.length > 0) {
                $element.remove();
                $scope.$destroy();
                treeTable.reIndex();
            }
        }
    };
}

function renderCell(el, colDefs, node, $compile, $scope) {
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
            elem.addClass('ebp-tt-func-cell');
        } else {
            if(col.type === 'progressBar') {
                initProgressBar(elem, {
                    value
                });
                elem.addClass('ebp-tt-comp-cell');
            }
        }
        el.append(elem);
    });
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
        $injector.invoke(initNode, this, {
            $scope,
            $element
        });
    }
}

export default NodeDirectiveFactory;