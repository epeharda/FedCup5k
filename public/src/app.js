angular.module('MainApp',['ngRoute', 'ngResource'])
.config(function($routeProvider, $locationProvider){
	$routeProvider	
		.when('/',{
			templateUrl:'views/home.html',
			contorller: 'HomeController'
		})	
		.when('/course', {
			templateUrl: 'views/course.html',
			controller: 'CourseController'
		})
		.when('/results',{
			templateUrl: 'views/results.html',
			controller: 'ResultsController'
		})

		

		//this is incase we need to add the #!
	$locationProvider.html5Mode(
	true);
});