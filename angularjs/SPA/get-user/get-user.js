angular.module('pickle-app').controller('get-user-ctrl', function ($scope, $http, dataService) {

    $scope.getUser = function getUser() {
        console.log("WORK");
        /*var GET_ONE_URL = 'http://192.168.61.182:8084/users/' + $scope.searchValue;
        $http.get(GET_ONE_URL).then(function gotOne(response) {
            $scope.foundUser = response.data;
        });*/

        dataService.getUser($scope.searchValue).then(function gotOne(response) {
            $scope.foundUser = response.data;
        });
    }

});