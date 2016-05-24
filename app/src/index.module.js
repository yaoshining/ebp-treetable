/**
 * Created by yao
 */
import ebpTreeTable from './ebp-treetable';
import layout from './layouts/layouts.module';
import routesConfig from './index.routes';
import TreeTableDemoController from './demos/controllers/treeTableDemo.controller';

angular.module('ebpUIDemo',['ui.router', layout.name, ebpTreeTable.name])
    .config(routesConfig)
    .controller('TreeTableDemoController', TreeTableDemoController)
    .run();
