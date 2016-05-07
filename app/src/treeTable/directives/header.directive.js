/**
 * Created by yaoshining on 16/3/23.
 */
'use strict';
function linkFunc(scope, elem) {
    let width = elem.width();
    let treeTable = scope.$ebpTreeTable;
    let events = treeTable.events;
    let resizeMark = treeTable.resizeMark;
    let col = scope.col;
    if(typeof interact === 'undefined') {
        if(angular.isFunction(requirejs)) {
            window.interact = requirejs('interact');
        }
    }
    interact(elem[0]).resizable({
        preserveAspectRatio: true,
        edges: {
            left: false,
            right: true,
            bottom: false,
            top: false
        }
    }).on({
        'resizestart': function() {
            scope.$apply(() => {
                resizeMark.display = 'block';
            });
        },
        'resizemove': function(event) {
            scope.$apply(() => {
                let relativeX = event.pageX - treeTable.$el.offset().left;
                resizeMark.left = relativeX + 'px';

                width = event.rect.width;
            });
        },
        'resizeend': function() {
            scope.$apply(() => {
                if(scope.col) {
                    scope.col.width = width;
                } else {
                    treeTable.resizeCol(elem.index() + 1, width);
                }
                resizeMark.display = 'none';
            });
        }
    });
    if(col) {
        if(col.type === 'crud') {
            let addBtn = $('<a>').addClass('ebp-tt-btn ebp-tt-btn-insert-row').attr('title', '操作列');
            addBtn.on('click', (event) => {
                event.preventDefault();
                events.add(null, treeTable.$children);
            });
            elem.addClass('ebp-tt-crud-col');
            elem.html(addBtn);
        }
        if(col.checkable) {
            let checkHandler = $('<label>').addClass('ebp-tt-checkbox');
            let checkbox = $('<input />', {
                type: 'checkbox'
            });
            checkHandler.append(checkbox);
            checkHandler.append('<span>');
            elem.children('div').prepend(checkHandler);
            checkbox.on({
                change: () => {
                    let state = checkbox.is(':checked');
                    treeTable.checkAll(state);
                }
            });
        }
    }
}

function HeaderDirectiveFactory() {
    let directive = {
        restrict: 'C',
        scope: false,
        link: linkFunc
    };

    return directive;
}

export default HeaderDirectiveFactory;