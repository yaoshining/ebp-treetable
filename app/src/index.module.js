/**
 * Created by yao
 */
'use strict';
import ebpTreeTable from './ebp-treetable';
import routesConfig from './index.routes';
import TreeTableDemoController from './demos/controllers/treeTableDemo.controller';

angular.module('ebpUIDemo',['ui.router', ebpTreeTable.name])
    .config(routesConfig)
    .controller('TreeTableDemoController', TreeTableDemoController)
    .run();
