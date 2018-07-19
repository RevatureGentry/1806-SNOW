/**
 * users
 * 
 */

angular.module('pickle-app', []);
 
 angular.module('pickle-app').controller('add-user-ctrl', function($scope, $http) {
    $scope.postUser = function() {
        $http.post('http://192.168.61.182:8084/users', $scope.user).then(function(response) {
            $scope.user = {};
            console.log(response.status);
        })
    }
 });

 angular.module('pickle-app').controller('get-all-ctrl', function($scope, $http) {
    $scope.refresh = function() {
        // will return a promise
        $http.get('http://192.168.61.182:8084/users').then(function(response) {
            $scope.users = response.data;
        });
    };
});
//usually one controller per page
angular.module('pickle-app').controller('get-one-ctrl', function($scope, $http) {
    $scope.goFetchUser = function() {
        var url = 'http://192.168.61.182:8084/users' + $scope.searchValue
        $http.get('http://192.168.61.182:8084/users').then(function() {
            $scope.foundUser = response.data;
        })
    }
});