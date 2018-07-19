angular.module('pickle-app').controller('get-all-ctrl', function ($scope, $http, $interval, dataService) {
    var GET_ALL_URL = "http://192.168.61.182:8084/users"
    $scope.refresh = function() {
        /*$http.get(GET_ALL_URL).then(function gotAll(response) {
            $scope.users = response.data;
        });*/

        $interval($scope.getAllUsers, 2000);
    }

    $scope.getAllUsers = function() {
        /*$http.get(GET_ALL_URL).then(function gotAll(response) {
            $scope.users = response.data;
        });*/

        dataService.getUsers().then(function(response) {
            $scope.users = response.data;
        });
        console.log("getting users");
    }
});