(function() {

	'use strict';

	angular
		.module('app')
		.config(['$stateProvider', function ($stateProvider) {

			$stateProvider

				.state('app', {

					abstract: true,
					url: '',
					templateUrl: 'modules/app/index.html'

				});

		}]);

})();