/**
 * GET http://192.168.61.182:8084/users/{id} (get one)
 */
// usually one controller per page
angular.module('pickle-app').controller('get-one-ctrl', function($scope, $http) {
	$scope.goFetchUser = function() {
		var url = 'http://192.168.61.182:8084/users/' + $scope.searchValue;
		$http.get(url).then(function(response) {
			$scope.foundUser = response.data;
		});
	};
});