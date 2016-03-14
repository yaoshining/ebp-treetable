/**
 * Created by yaoshining on 16/3/14.
 */
import {directiveNames} from '../config';


function linkFunc() {

}

function NodeDirectiveFactory() {
    let directive = {
        restrict: 'AE',
        scope: false,
        link: linkFunc,
        controller: EbpTreeTableNodeController,
        controllerAs: '$node'
    };

    return directive;
}

function initNode($scope, $element) {
    'ngInject';
    let node = $scope.node;
    let treeTable = $scope.$ebpTreeTable;
    let events = treeTable.events;
    this.edit = () => {
        function callback(data) {
            _.merge(node, data);
            $scope.$apply();
        }
        events.edit(angular.copy(node, {}), callback);
    };
    this.remove = () => {
        if(confirm("确定删除此条记录以及所有子记录吗?")) {
            let result = _.remove(treeTable.data, (item) => {
                return item.id === node.id;
            });
            if(result.length > 0) {
                $element.remove();
                $scope.$destroy();
                treeTable.reIndex();
            }
        }
    };
}

class EbpTreeTableNodeController {
    constructor($injector, $scope, $element) {
        'ngInject';
        $injector.invoke(initNode, this, {
            $scope,
            $element
        });
    }
}

export default NodeDirectiveFactory;