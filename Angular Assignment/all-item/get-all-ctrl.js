/**
 * GET http://192.168.61.182:8084/users (get all)
 */
angular.module('catalog-app').controller('get-all-ctrl', function($scope, $interval, dataService) {
	$scope.refresh = function() {
		console.log("asdasdas");
		$scope.getAllItems();
		$interval($scope.getAllItems, 2000);
	};

	$scope.getAllItems = function(){
		dataService.getItems().then(function(response){
			$scope.items = response.data;
		});
	}
});