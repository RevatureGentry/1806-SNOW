angular.module('catalog-app').controller('catalog-ctrl', function($scope, dataFinder) {
    $scope.getAllItems = function() {
        dataFinder.getAllItems()
        .then(function(response) {
            $scope.cItems = response.data;
        })
    }

    //Conditional Formatting EventListeners - Changes the ng-style object 'cataRow' depending on mouseEnter/mouseLeave.
    $scope.tableHoverEnter = function() {
        $scope.cataRow = {
            'background-color': 'grey'
        }
    }
    $scope.tableHoverExit = function() {
        $scope.cataRow = {
            'background-color': '#ffffffff'
        }
    }
});