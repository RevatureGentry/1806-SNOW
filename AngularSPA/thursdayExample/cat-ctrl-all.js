angular.module('cat-app').controller('cat-ctrl-all', function($scope, dataService) {
    $scope.refresh = function() {
        $scope.getAll();
    };

    $scope.getAll = function () {
        console.log('Catelog Updating...');
        dataService.getCat().then((function(response) {
           $scope.items = response.data;
        }))
    }
})