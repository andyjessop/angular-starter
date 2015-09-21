(function () {

    'use strict';

    angular
        .module('app.view1')
        .controller('View1Controller', View1Controller);

    function View1Controller() {

        var vm = this;

        vm.title = "View 1";

    }

})();
