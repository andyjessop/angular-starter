(function () {

    'use strict';

    angular
        .module('app.view2')
        .config(['$stateProvider', function ($stateProvider) {

            $stateProvider

                .state('app.view2', {

                    url: '/view2',
                    templateUrl: 'modules/view2/index.html',
                    controller: 'View2Controller'

                });

        }]);

})();
