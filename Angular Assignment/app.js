angular.module('catalog-app', ['ngRoute']);

angular.module('catalog-app').config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: 'home.html'
    })

    .when("/all", {
        templateUrl: 'all-item/all-view.html',
        controller: 'get-all-ctrl'
    })

    .when("/view", {
        templateUrl: 'view.html'
    })
    .otherwise({
        redirectTo: '/'
    })
});

angular.module('catalog-app').service('dataService', ['$http', function($http){  
    let urlBase = "http://bootapp-env.ucm3a324z6.us-east-2.elasticbeanstalk.com:8085/items";
    this.getItems = function(){
        return $http.get(urlBase);
    }
}])
