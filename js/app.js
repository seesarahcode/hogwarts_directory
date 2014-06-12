var hogwartsApp = angular.module('hogwartsApp', [
	'ngRoute',
	'studentControllers'
]);

hogwartsApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/directory', {
		templateUrl: 'partials/directory.html',
		controller: 'MainDirectoryController'
	}).
	when('/details/:itemId', {
		templateUrl: 'partials/details.html',
		controller: 'StudentDetailsController'
	}).
	otherwise({
		redirectTo: "/directory"
	});
}]);