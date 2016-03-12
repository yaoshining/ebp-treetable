/**
 * Created by yao on 15/12/4.
 */
import layout from './layouts/layouts.module';
import core from './treeTable/core.module';

var ebpTreeTable = angular.module('ebp.treetable', [
    'ngResource',
    layout.name,
    core.name
]);

export default ebpTreeTable;
