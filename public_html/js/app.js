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
			.when('/lists/:typeName/:typeId', {
				templateUrl: 'templates/lists.html',
				controller: 'ListsController'
			})
			.when('/list/:listId', {
				templateUrl: 'templates/list-details.html',
				controller: 'ListDetailsController'
			})
			.otherwise({
				redirectTo: '/home'
			})
	}]);
