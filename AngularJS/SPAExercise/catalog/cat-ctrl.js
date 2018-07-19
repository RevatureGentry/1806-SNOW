angular.module('exercise-app').controller('catalog-ctrl', function($scope, dataService) {
    dataService.getCatalog().then(function(response){
        $scope.users = response.data;
    });
});