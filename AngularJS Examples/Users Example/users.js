/**
 * Users
 *    GET 
 *    GET 
 *    POST 
 */

angular.module('pickle-app', []);
//Usually you'll use one controller per page.

/**
 * POST
 */

angular.module('pickle-app').controller('add-user-ctrl', function($scope, $http) {
    $scope.postUser = function() {
        //HTTP always return a Promise
        $http.post('http://192.168.61.182:8084/users', $scope.user).then(function(response) {
            $scope.user = {};
            console.log(response.status);
        })
    }
});

/**
 * GET ALL
 */
angular.module('pickle-app').controller('get-all-ctrl', function($scope, $http) {
    $scope.refresh = function() {
        //$http.get('http://192.168.61.182:8084/users') returns a promise that it will give you the data. 
        $http.get('http://192.168.61.182:8084/users/').then(function(response) {
            $scope.users = response.data;
        }); //If the http request is successful, then run this function and pass the http response through it.
    }
});

/**
 * GET ONE
 */
angular.module('pickle-app').controller('get-one-ctrl', function($scope, $http) {
    $scope.goFetchUser = function() {
        var url = 'http://192.168.61.182:8084/users/' + $scope.searchValue;
        $http.get(url).then(function(response) {
            $scope.foundUser = response.data;
        });
    }
});