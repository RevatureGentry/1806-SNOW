angular.module('exercise-app', ['ngRoute']);

angular.module('exercise-app').config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: 'home.html'
    })
    .when("/catalog", {
        templateUrl: 'catalog/catalog.html',
        controller: 'catalog-ctrl'
    })
    .when("/text", {
        templateUrl: 'text/text.html',
        controller: 'text-ctrl'
    })
    .otherwise({
        redirectTo: "/"
    })
});

angular.module('exercise-app').service('dataService', ['$http', function($http){
    this.getCatalog = function() {
        return $http.get('http://bootapp-env.ucm3a324z6.us-east-2.elasticbeanstalk.com:8085/items');
    }
}]);