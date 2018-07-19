angular.module('pickle-app').controller('add-user-ctrl', function($scope, dataService){
    $scope.postUser = function(){
        //http methods always return a promise
        //$http.post('http://192.168.61.182:8084/users', $scope.user)
        dataService.addUser($scope.user)
        .then(function(response){
            $scope.user = {};
            console.log(response.status);
        });
    };
});