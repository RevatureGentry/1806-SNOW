/**
 * POST http://192.168.61.182:8084/users (add user)
 */

angular.module('pickle-app').controller('add-user-ctrl', function($scope, dataService, $http) {
    $scope.postUser = function() {
        //HTTP always return a Promise
        dataService.addUser($scope.user)
            .then(function(response) {
                $scope.user = {};
                console.log(response.status);
            });
    }
});