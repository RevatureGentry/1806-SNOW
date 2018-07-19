angular.module('cat-app').controller('cat-desc', function($scope) {
    $scope.changeColor = function(bool) {
        if(bool === true) {
            $scope.colorFoo = {'background-color' : 'red'};
        } else if (bool === false) {
            $scope.colorFoo = {'background-color': ''};
        }
    };
}) 