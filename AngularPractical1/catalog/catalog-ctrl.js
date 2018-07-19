
angular.module('catalog-app').controller('catalog-ctrl', function($scope, dataService) {
	$scope.refresh = function() {
		$scope.getAllItems();
		
	};

	$scope.getAllItems = function(){
		dataService.getItems().then((function(response) {
				$scope.items = response.data;
		})); 
		
	}
});