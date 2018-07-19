console.log('catalog');
angular.module('c-app').controller('catalog-controller',function($scope,dataService,$interval){
    console.log('controller');
    $scope.refresh = function(){
        console.log('in function');
        $scope.getAllUsers();
        console.log('users got');
    }
    console.log('enter getAllUders');
    $scope.getAllUsers = function(){
        dataService.getUsers().then(function(value){
            $scope.items = value.data;
        });
    }
});