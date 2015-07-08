(function() {

	'use strict';

	angular
		.module('app.view1')
		.controller('View1Controller', View1Controller);

		View1Controller.$inject = ['$scope'];

		function View1Controller($scope) {

            this.title = "View 1";

		}


})();