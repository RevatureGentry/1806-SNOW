angular.module('pickle-app', []);

// Usually one controller per page
angular.module('pickle-app').controller('add-user-ctrl', function($scope, $http) {
    $scope.postUser = function() {
        //http always returns a promise
        $http.post('http://192.168.61.182:8084/users', $scope.user).then(function(response) {
            $scope.user = {};
            console.log(response.status);
        });
    };
});

angular.module('pickle-app').controller('get-all-ctrl', function($scope, $http) {
    $scope.refresh = function() {
        var successCallback = function(response) {
            $scope.users = response.data;
        };
        // returns a promise
        $http.get('http://192.168.61.182:8084/users').then(successCallback);
    };
});

angular.module('pickle-app').controller('get-one-ctrl', function($scope, $http) {
    
    $scope.goFetchUser = function() {
        var url = 'http://192.168.61.182:8084/users/' + $scope.searchValue;
        $http.get(url).then(function(response) {
            $scope.foundUser = response.data;
        });
    };

});