angular.module('overview', ['ngRoute']);

angular.module('overview').config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'home.html'
    })
    .when('/text', {
        templateUrl: 'text.html'
    })
    .when('/catalog', {
        templateUrl: 'catalog.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});

angular.module('overview').service('dataService', ['$http', function($http){
    let url = 'http://bootapp-env.ucm3a324z6.us-east-2.elasticbeanstalk.com:8085/items';
    this.getItems = function(){
        return $http.get(url);
    }
}]);

angular.module('overview').controller('get-catalog-items', function($scope, dataService){
    $scope.showItems = function() {
        dataService.getItems().then((function(response){
            $scope.items = response.data;
        }))
    }
});

angular.module('overview').controller('change-styles', function($scope) {
    console.log("Loaded");
    $scope.visibility = true;
    $scope.changeColors = function(bool){
        if(bool == true){
            $scope.style = {
                "background-color" : "red"
            }
        }
        else{
            $scope.style = {
                "background-color" : "white"
            }
        }
        console.log("Trying to change colors");
        
    }
    
    $scope.hideText = function(){
        switch($scope.visibility){
            case true:
                $scope.visibility = false;
                break;
            case false:
                $scope.visibility = true;
                break;      
            }
        }
        
});