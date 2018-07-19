/**
 * GET http://192.168.61.182:8084/users/<id> (Get One)
 */
angular.module('pickle-app').controller('get-one-ctrl', function($scope, dataService) {
    $scope.goFetchUser = function() {
        //Get a User using the dataService Service that we built in app.js.
        dataService.getUser($scope.searchValue)
            .then(function(response) {
                $scope.foundUser = response.data;
            });
    }
});