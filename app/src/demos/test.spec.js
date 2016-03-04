/**
 * Created by yaoshining on 16/3/4.
 */
'use strict';
describe('Testing Modules', function() {
    describe('App Module:', function() {
        var treeTableModule;
        beforeEach(function(){
            treeTableModule = module('ebp.treetable');
        });

        it('should be registered', function() {
            expect(treeTableModule).not.toBeNull();
        });

        it('should be injectable', inject(function($controller) {
            expect($controller).not.toBeNull();
        }));
    });
});