/**
 * Created by yaoshining on 16/3/1.
 */
import * as config from './config';
import TreeTableDirectiveFactory from './directives/treeTable.directive';
import ColumnDirectiveFactory from './directives/column.directive';
import CellDirectiveFactory from './directives/cell.directive';

let coreModule = angular.module('ebp.treeTable.core', []);
coreModule.constant('defaultSettings', config.treeTableSettings)
          .directive(config.directiveNames.ebpTreeTableCol, ColumnDirectiveFactory)
          .directive(config.directiveNames.ebpTreeTableCell, CellDirectiveFactory)
          .directive(config.directiveNames.ebpTreeTable, TreeTableDirectiveFactory);
export default coreModule;