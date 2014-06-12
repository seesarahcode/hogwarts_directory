var studentControllers = angular.module('studentControllers', ['ngAnimate']);

studentControllers.controller('MainDirectoryController', ['$scope', '$http', function($scope, $http) {
		$http.get('js/data.json').success(function(data) {
			$scope.students = data;
			$scope.studentOrder = 'name';
		});
	}]);

studentControllers.controller('StudentDetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {$http.get('js/data.json').success(function(data) {
		$scope.students = data;
		$scope.whichItem = $routeParams.itemId;

		if ($routeParams.itemId > 0) {
			$scope.prevItem = Number($routeParams.itemId)-1;
		} else {
			$scope.prevItem = $scope.students.length-1;
		}

		if ($routeParams.itemId < $scope.students.length-1) {
			$scope.nextItem = Number($routeParams.itemId)+1;
		} else {
			$scope.nextItem = 0;
		}
		
	});
}]);