angular.module('pickle-app').controller('add-user-ctrl', function ($scope, $http, dataService) {
    var POST_URL = "http://192.168.61.182:8084/users";
    $scope.createUser = function() {
        /*$http.post(POST_URL, $scope.user).then(function createdOne(response){
            $scope.user = {};
            console.log(response.status);
        });*/

        dataService.addUser($scope.user).then(function createdOne(response){
            $scope.user = {};
            console.log(response.status);
        });
    }
});
