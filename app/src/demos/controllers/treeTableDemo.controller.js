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
            }, {
                name: 'startTime',
                title: '开始时间',
                index: 6,
                width: 120
            }, {
                name: 'endTime',
                title: '结束时间',
                index: 7,
                width: 120
            }, {
                name: 'progress',
                title: '进度',
                index: 8
            }],
            events: {
                edit: function(node, callback) {
                    setTimeout(() => {
                        node.name = 'qweqe';
                        callback(node);
                    }, 1000);
                }
            }
        };
    }

}

export default TreeTableDemoController;