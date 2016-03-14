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

function initTreeTable($element, $templateRequest, $compile, $scope, $controller) {
    let wrapper = $element.find('.ebp-tt-content-wrapper');
    let tbody = wrapper.find('tbody');
    let tplLoader = $templateRequest('src/treeTable/templates/row.tpl.html');
    tplLoader.then((tpl) => {
        let compiled = _.template(tpl);
        angular.forEach(this.data, (e, i) => {
            let el = $(compiled({
                index: i,
                node: e
            }));
            let scope = $scope.$new();
            scope.node = e;
            initCell(el, this.colDefs, e);
            tbody.append($compile(el)(scope));
        });
    });

    function initCell(el, colDefs, node) {
        angular.forEach(colDefs, (col) => {
            let compiled = _.template(`<td><%- node[col.name]%></td>`);
            let elem = $(compiled({
                node,
                col
            }));
            if(col.tpl) {
                let contentEl = angular.element('<div>').html(col.tpl);
                elem.html(contentEl);
                elem.addClass('ebp-tt-func-cell');
            }
            el.append(elem);
        });
    }
}

class TreeTableController {

    constructor($scope, $attrs, defaultSettings, $element, $injector) {
        'ngInject';
        let settings = $scope.$eval($attrs[directiveNames.ebpTreeTable]);
        settings = _.merge({}, defaultSettings, settings);
        initSettings.apply(this, [settings]);

        this.remove = (node) => {
            _.remove(this.data, (item) => {
                return item.id === node.id;
            });
        };

        this.render = () => {
            $.getJSON('/data/2.json', (data) => {
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
    }

}

export default TreeTableDirectiveFactory;