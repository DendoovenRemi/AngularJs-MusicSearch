angular.module('musicApp',["ngRoute"])
	.config(function($routeProvider){
		$routeProvider
			.when('/search',{
				templateUrl:"views/search.html",
				controller:"SearchCtrl",
				controllerAs:"search"
			})

			.when('/info',{
				templateUrl:"views/info.html",
				controller:'InfoCtrl',
				controllerAs:'info'
			})

			.when('/',{
				templateUrl:"views/home.html",
				controller:'HomeCtrl',
				controllerAs:'home'
			})

			.otherwise({
				redirectTo: "/"
			});

	})