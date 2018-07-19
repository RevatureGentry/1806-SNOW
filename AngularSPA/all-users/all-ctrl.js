/**
 * GET http://192.168.61.182:8084/users (get all)
 */
angular.module('pickle-app').controller('get-all-ctrl', function($scope, $interval, dataService) {
	$scope.refresh = function() {
		$scope.getAllUsers();
		//$interval($scope.getAllUsers, 2000);
	};

	$scope.getAllUsers = function(){
		console.log("checking for more users");
		dataService.getUsers().then((function(response) {
				$scope.users = response.data;
		})); 
		//$http.get('http://192.168.61.182:8084/users').then(function(response) {
		//	$scope.users = response.data;
		//});
	}
});