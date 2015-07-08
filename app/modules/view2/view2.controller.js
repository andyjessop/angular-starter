(function() {

	'use strict';

	angular
		.module('app.view2')
		.controller('View2Controller', View2Controller);

		View2Controller.$inject = ['$scope'];

		function View2Controller($scope) {

            this.title = "View 2";

		}


})();