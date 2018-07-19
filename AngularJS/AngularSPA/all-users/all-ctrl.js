angular.module('pickle-app').controller('get-all-ctrl', function($scope, dataService, $interval) {
    $scope.refresh = function() {
        $scope.getAllUsers();
        //$interval($scope.getAllUsers, 2000);
    };

    $scope.getAllUsers = function() {
        var successCallback = function(response) {
            $scope.users = response.data;
        };
        // returns a promise
        //$http.get('http://192.168.61.182:8084/users').then(successCallback);
        dataService.getUsers().then(successCallback);
    };
});