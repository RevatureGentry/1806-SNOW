

angular.module('Ang-Challenge').controller('catalog-ctrl',function($scope, dataService){
    $scope.getItems = function(){
        console.log('getting items');
       dataService.getItems().then(
            function(response){
                $scope.catalog = response.data;
            })
    }
});