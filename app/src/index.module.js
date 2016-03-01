/**
 * Created by yao
 */
import ebpTreeTable from './ebp-treetable';
import routesConfig from './index.routes';

angular.module('ebpUIDemo',['ui.router', ebpTreeTable.name])
    .config(routesConfig)
    .run();
