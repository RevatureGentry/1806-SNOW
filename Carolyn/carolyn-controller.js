angular.module('carolyn-app').controller('carolyn-ctrl', function($scope, dataService){
    $scope.refresh = function(){
        $scope.getAllUsers();
        //$interval($scope.getAllUsers, 2000);
    };

    $scope.getAllUsers = function(){

        dataService.getUsers().then(function(value){
            $scope.items = value.data;
        });
    };

});