angular.module('pickle-app',[]);
//usually one controller per page
//POST http://192.168.61.182:8084/users (add new)
angular.module('pickle-app').controller('add-user-ctrl', function($scope, $http){
    $scope.postUser = function(){
        //returns a promise : $http.get('http://192.168.61.182:8084/users');
        $http.post('http://192.168.61.182:8084/users').then(function(response){
            $scope.user = {};
            console.log(response.status);
        });
    };
});
//GET http://192.168.61.182:8084/users (add new)
angular.module('pickle-app').controller('get-all-ctrl', function($scope, $http){
    $scope.refresh = function(){
        $http.get('http://192.168.61.182:8084/users', $scope.user).then(function(response){
            $scope.users = response.data;
        });
    };
});
/**
 * GET http://192.168.61.182:8084/users/{id} (get one)
 */
// usually one controller per page
angular.module('pickle-app').controller('get-one-ctrl', function($scope, $http) {
	$scope.goFetchUser = function() {
		var url = 'http://192.168.61.182:8084/users/' + $scope.searchValue;
		$http.get(url).then(function(response) {
			$scope.foundUser = response.data;
		});
	};
});