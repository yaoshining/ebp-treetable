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
            post: (scope, elem) => {
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
                });
                let popover = angular.element('<div>').addClass('ebp-tt-popover').text('添加');
                elem.on('mouseover', (event) => {
                    if($(event.target).parents().addBack().is('.ebp-tt-btn')) {
                        $(event.target).closest('.ebp-tt-btn').append(popover);
                    }
                });
                elem.on('mouseout', (event) => {
                    if($(event.target).parents().addBack().is('.ebp-tt-btn')) {

                    }
                });
            }
        };
    }

    let directive = {
        restrict: 'AE',
        compile: compileFunc,
        scope: true,
        //templateUrl: 'src/treeTable/templates/treeTable.tpl.html',
        controller: TreeTableController,
        controllerAs: '$ebpTreeTable'
    };

    return directive;
}

function initSettings(settings) {
    this.colDefs = _.sortBy(settings.colDefs || [], function(col) {
        return col.index;
    });
}

class TreeTableController {

    constructor($scope, $attrs, $resource, defaultSettings) {
        'ngInject';
        let settings = $scope.$eval($attrs[directiveNames.ebpTreeTable]);
        settings = _.extend(defaultSettings, settings);
        initSettings.apply(this, [settings]);
        let Resource = $resource('/data/1.json');
        this.data = Resource.query();
    }

}

export default TreeTableDirectiveFactory;