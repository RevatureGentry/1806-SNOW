angular.module('banana-stand').controller('get-catalog-ctrl', function($scope, dataService, $interval) {
    $scope.refresh = function() {
        $scope.allCatalogItems();
        // $interval($scope.getCatalog, 2000);
    };
    $scope.allCatalogItems = function() {
        dataService.getCatalog().then(function(response){
            $scope.catalog = response.data;
            console.log(typeof($scope));
            console.log(typeof($scope.catalog));
            console.log(response.data); 
        }); 
    }
});