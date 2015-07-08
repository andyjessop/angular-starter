(function() {

	'use strict';

	angular
		.module('app')
		.controller('AppController', AppController);

		AppController.$inject = ['$scope'];

		function AppController($scope) {

			// Get current date for footer
			this.date = new Date();

			this.settings = {
				"app": {
                    "name": "Angular Starter",
                    "version": "0.1"
                }
			};

		}


})();