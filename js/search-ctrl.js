angular.module('pickle-app').controller('get-one-ctrl', function($scope, dataService){
    $scope.goFetchUser = function(){
        dataService.getUser($scope.searchValue)
        .then(function(response){
            $scope.foundUser = response.data;
        });
    };
});