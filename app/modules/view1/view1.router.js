(function () {

    'use strict';

    angular
        .module('app.view1')
        .config(['$stateProvider', function ($stateProvider) {

            $stateProvider

                .state('app.view1', {

                    url: '/view1',
                    templateUrl: 'modules/view1/index.html',
                    controller: 'View1Controller'

                });

        }]);

})();
