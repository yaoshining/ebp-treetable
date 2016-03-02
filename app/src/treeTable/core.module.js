/**
 * Created by yaoshining on 16/3/1.
 */
import * as config from './config';
import TreeTableDirectiveFactory from './directives/treeTable.directive';

let coreModule = angular.module('ebp.treeTable.core', []);
coreModule.directive(config.directiveNames.ebpTreeTable, TreeTableDirectiveFactory);
export default coreModule;