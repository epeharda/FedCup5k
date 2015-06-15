angular.module('MainApp',['ngRoute', 'ngResource'])
.config(function($routeProvider, $locationProvider){
	$routeProvider		
		.when('/course', {
			controller: 'ListController',
			templateUrl: 'views/course.html'
		})
		.when('/results',{
			controller: 'NewController',
			templateUrl: 'views/results.html'
		})
		.otherwise({
			controller: 'MainController',
			templateUrl: 'home.html'
		});
		

		//this is incase we need to add the #!
	$locationProvider.html5Mode(
	true);
});