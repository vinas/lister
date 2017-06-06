var app = angular.module('questionMaster', ['ngRoute'])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(false);
		$routeProvider
			.when('/', {
				redirectTo: '/home'
			})
			.when('/home', {
				templateUrl: 'templates/home.html'
			})
			/*.when('/type/:typeId', {
				templateUrl: 'templates/lists.html',
				controller: 'listsController'
			})*/
			.otherwise({
				redirectTo: '/home'
			})
	}]);
