(function() {

	'use strict';

	angular
		.module('app')
		.controller('AppController', AppController);

		function AppController() {

			var vm = this;

			// Get current date for footer
			vm.date = new Date();

			vm.settings = {
				"app": {
					"name": "Angular Starter",
					"version": "0.1"
				}
			};

		}

})();
