/**
 * Created by yao on 15/12/4.
 */
import core from './treeTable/core.module';

var ebpTreeTable = angular.module('ebp.treetable', [
    'ngResource',
    core.name
]);

export default ebpTreeTable;
