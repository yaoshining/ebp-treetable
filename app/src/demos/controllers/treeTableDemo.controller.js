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
                width: 300,
                index: 2,
                expandable: true,
                checkable: true
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
                index: 8,
                type: 'progressBar'
            }, {
                type: 'crud',
                width: 150,
                index: 4
            }],
            events: {
                edit: function(node, callback) {
                    setTimeout(function() {
                        node.name = 'qweqe';
                        callback(node);
                    }, 1000);
                },
                add: function(node, children, callback) {
                    setTimeout(function() {
                        var newNode = {
                            id: 999,
                            name: '新插入的节点',
                            details: '新插入节点的详情',
                            startTime: '2016-05-06',
                            endTime: '2016-05-06',
                            progress: 59
                        }, index = 0;
                        newNode.parentId = node?node.id:0;
                        callback(index, newNode);
                    }, 1000);
                }
            },
            dataSource: {
                read: {
                    url: '/data/:id.json'
                },
                drop: {
                    url: '/tasks/:id'
                }
            }
        };

        $scope.approval = function(node) {
            console.log(node.data);
        };
    }

}

export default TreeTableDemoController;