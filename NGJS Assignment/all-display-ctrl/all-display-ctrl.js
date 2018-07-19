angular.module('cake-app').controller('all-display-ctrl', function($scope, $interval, dataService) {
	$scope.refresh = function() {
		$scope.getAllItems();
		//$interval($scope.getAllUsers, 2000);
    };

    $scope.getAllItems = function(){
		dataService.getItems().then((function(response) {
				$scope.items = response.data;
				}));
		}
});

