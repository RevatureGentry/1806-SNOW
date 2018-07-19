angular.module('pickle-app').controller('catalog-view-ctrl', function($scope, catalogDataService){
    $scope.refresh2 = function() {
		$scope.getAllItems();
		//$interval($scope.getAllUsers, 2000);
	};

	$scope.getAllItems = function(){
		console.log("checking for more items");
		catalogDataService.getCatalogItems().then((function(response) {
				$scope.Items = response.data;
		})); 
		//$http.get('http://192.168.61.182:8084/users').then(function(response) {
		//	$scope.users = response.data;
		//});
	}
});
