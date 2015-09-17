(function() {
    'use strict';

    angular
        .module('meanhub-ng-lib')
        .directive('mhTagEditor', mhTagEditor)
        .controller('TagEditor', [TagEditor]);

    function mhTagEditor() {
        return {
            restrict: 'E',
            templateUrl: 'mh-tag-editor.html',
            controller: 'TagEditor',
            controllerAs: 'tagEditor',
            scope: true,
            bindToController: {
                tags: '='
            }
        }
    }

    function TagEditor() {
        var vm = this;
        vm.tag = '';
        if(vm.tags == null) {
            vm.tags = [];
        }

        vm.onInput = function(keyEvent) {
            var key = keyEvent.which;
            if(key === 13) {    //Enter
                vm.tags.push(vm.tag);
                vm.tag = '';
            }
        };

        vm.removeTag = function($index) {
            if($index > -1 ) {
                vm.tags.splice($index, 1);
            }
        }

    }
})();