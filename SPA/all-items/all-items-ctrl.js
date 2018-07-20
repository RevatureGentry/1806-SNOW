angular.module('catalog-app').controller('get-all-item-ctrl', function($scope, $http) {
	$scope.refresh = function() {
		
		$http.get('http://bootapp-env.ucm3a324z6.us-east-2.elasticbeanstalk.com:8085/items').then(function(response) {
			$scope.items = response.data;
		});
	};
});