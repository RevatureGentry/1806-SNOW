/**
 * GET http://192.168.61.182:8084/users/{id} (get one)
 */
// usually one controller per page
angular.module('pickle-app').controller('get-one-ctrl', function($scope, dataService) {
	$scope.goFetchUser = function() {
		dataService.getUser($scope.searchValue)
		.then(function(response) {
			$scope.foundUser = response.data;
		});
	};
});