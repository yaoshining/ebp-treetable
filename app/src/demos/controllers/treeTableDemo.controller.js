/**
 * Created by yaoshining on 16/3/10.
 */
class TreeTableDemoController {

    constructor($scope) {
        'ngInject';
        $scope.treeTableSettings = {
            colDefs: [{
                name: 'name',
                title: '名称',
                width: 150,
                index: 2
            }, {
                name: 'details',
                title: '详情',
                index: 3
            }]
        };
    }

}

export default TreeTableDemoController;