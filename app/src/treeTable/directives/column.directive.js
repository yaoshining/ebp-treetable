/**
 * Created by yaoshining on 16/3/11.
 */
import {directiveNames} from '../config';


function ColumnDirectiveFactory() {

    function linkFunc(scope, elem, attrs, treeTable) {
        let tpl = elem.html().trim();
        let colDef = {
            title: attrs.title,
            index: attrs.index,
            width: attrs.width,
            tpl
        };
        let sortedIndex = _.sortedIndex(_.map(treeTable.colDefs, (col) => {
            return col.index;
        }), colDef.index);
        treeTable.colDefs.splice(sortedIndex, 0, colDef);
        elem.remove();
    }

    let directive = {
        restrict: 'AE',
        link: linkFunc,
        require: `^${directiveNames.ebpTreeTable}`
    };

    return directive;
}

export default ColumnDirectiveFactory;