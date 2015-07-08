(function() {

	'use strict';

	angular
		.module('app')
		.config(['$stateProvider', function appRouter($stateProvider) {

			$stateProvider

				.state('app', {

					abstract: true,
					url: '',
					templateUrl: 'modules/app/index.html'

				})

				.state('app.view1', {

					url: '',
					templateUrl: 'modules/view1/index.html',
					controller: 'View1Controller'

				})

                .state('app.view2', {

                    url: '',
                    templateUrl: 'modules/view2/index.html',
                    controller: 'View2Controller'

                });

		}]);

})();