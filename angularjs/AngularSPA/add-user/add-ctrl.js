/**
 * POST http://192.168.61.182:8084/users (add new)
 */
angular.module('pickle-app').controller('add-user-ctrl', function($scope, $http) {
	$scope.postUser = function() {
		// $http always returns a Promise
		$http.post('http://192.168.61.182:8084/users', $scope.user).then(function(response) {
			$scope.user = {};
			console.log(response.status);
		});
	};
});