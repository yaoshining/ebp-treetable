/**
 * Created by yaoshining on 16/3/11.
 */
import {directiveNames} from '../config';

function CellDirectiveFactory($compile) {
    'ngInject';
    function linkFunc(scope, elem) {
        elem.addClass('ebp-tt-cell');
        let col = scope.col;
        if(col.tpl) {
            let contentEl = angular.element('<div>').html(col.tpl);
            elem.html(contentEl);
            elem.addClass('ebp-tt-func-cell');
            $compile(contentEl)(scope);
        }
    }

    let directive = {
        restrict: 'AE',
        link: linkFunc,
        scope: false,
        require: `^${directiveNames.ebpTreeTableNode}`,
        controller: EbpTreeTableCellController,
        controllerAs: '$cell'
    };

    return directive;
}

class EbpTreeTableCellController {
    constructor() {

    }
}

export default CellDirectiveFactory;