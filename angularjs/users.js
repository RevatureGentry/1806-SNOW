




angular.module('pickle-app', []);

// ** Controllers ** Usually one controller for each page.



angular.module('pickle-app').controller('add-user-ctrl', function ($scope, $http) {
    var POST_URL = "http://192.168.61.182:8084/users";
    $scope.createUser = function() {
        $http.post(POST_URL, $scope.user).then(function createdOne(response){
            $scope.user = {};
            console.log(response.status);
        });
    }
});

angular.module('pickle-app').controller('get-all-ctrl', function ($scope, $http) {
    var GET_ALL_URL = "http://192.168.61.182:8084/users"
    $scope.refresh = function() {
        $http.get(GET_ALL_URL).then(function gotAll(response) {
            $scope.users = response.data;
        });
    }
});

angular.module('pickle-app').controller('get-one-ctrl', function ($scope, $http) {

    $scope.getUser = function getUser() {
        var GET_ONE_URL = 'http://192.168.61.182:8084/users/' + $scope.searchValue;
        $http.get(GET_ONE_URL).then(function gotOne(response) {
            $scope.foundUser = response.data;
        });
    }

});