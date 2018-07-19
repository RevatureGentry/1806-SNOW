/**
 * GET http://192.168.61.182:8084/users/ (ALL Users)
 */
angular.module('pickle-app').controller('get-all-ctrl', function($scope, $interval, dataService) {
    $scope.refresh = function() {
        $scope.getAllUsers();
        // $interval($scope.getAllUsers, 2000);
    }
    $scope.getAllUsers = function() {
        console.log("Looking for more users...")
        dataService.getUsers()
            .then(function(response) {
                $scope.users = response.data;
            });

        /* $http.get('http://192.168.61.182:8084/users/').then(function(response) {
            $scope.users = response.data;
        }); */ 
        //If the http request is successful, then run this function and pass the http response through it.
        //$http.get('http://192.168.61.182:8084/users') returns a promise that it will give you the data. 
    }
});