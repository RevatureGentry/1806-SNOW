angular.module('lol-app').controller('display-all-ctrl', function ($scope, dataService) {
    
    $scope.refresh = function () {
        $scope.getAllUsers();
        //$interval($scope.getAllUsers, 2000);
    };
    

    $scope.getAllUsers = function () {
        console.log("checking for more users");
        dataService.getItems().then((function (response) {
            $scope.users = response.data;
            console.log(response);
        }));
        //$http.get('http://192.168.61.182:8084/users').then(function(response) {
        //	$scope.users = response.data;
        //});
    }
});