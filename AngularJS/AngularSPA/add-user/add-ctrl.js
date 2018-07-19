angular.module('pickle-app').controller('add-user-ctrl', function($scope, dataService) {
    $scope.postUser = function() {
        //http always returns a promise
        dataService.addUser($scope.user).then(function(response) {
            $scope.user = {};
            console.log(response.status);
        });
    };
});