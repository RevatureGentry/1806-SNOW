angular.module('exercise-app').controller('get-view-ctrl', function($scope, dataService) {
	$scope.refresh = function() {
		$scope.viewAllData();
	};

	$scope.viewAllData = function(){
		console.log("checking for data");
		dataService.getData().then((function(response) {
				$scope.items = response.data;
		})); 
	}
});