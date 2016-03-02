/**
 * Created by yaoshining on 16/3/1.
 */

function linkFunc(scope, elem) {
    let tableWidth = elem.find('table').width()
    let containerWidth = elem.width();
    if(tableWidth <= containerWidth) {
        elem.find('table').width(containerWidth);
    }
    elem.addClass('ebp-tt-container');
}

function TreeTableDirectiveFactory() {

    let directive = {
        restrict: 'AE',
        link: linkFunc,
        templateUrl: 'src/treeTable/templates/treeTable.tpl.html'
    };

    return directive;
}

export default TreeTableDirectiveFactory;