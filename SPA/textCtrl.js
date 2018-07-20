angular.module('catalog-app').controller('textCtrl', function($scope) {
    $scope.shouldShow= true;
	$scope.showHide = function() {
		$scope.shouldShow= !$scope.shouldShow;
	}
	})