angular.module('pickle-app', ['ngRoute']);

angular.module('pickle-app').config( function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'home.html'
    })
    .when("/add", {
        templateUrl:  'add-view.html',
        controller:  'add-user-ctrl'
    })
    .when("/all", {
        templateUrl:  'all-view.html',
        controller: 'get-all-ctrl'
    })
    .when("/search", {
        templateUrl: 'search-view.html',
        controller: 'get-one-ctrl'
    })
    .when("/catalog",{
        templateUrl: 'catalog-view.html',
        controller: 'catalog-view-ctrl'
    })
    .when("/filler", {
        templateUrl: 'filler-view.html',
        controller: 'filler-view-ctrl'
    })
    .otherwise({
        redirectTo: '/'
    })
});

angular.module('pickle-app').service('dataService', ['$http', function($http){
    let urlBase = "http://192.168.61.182:8084/users";
    this.getUsers = function(){
        return $http.get(urlBase);
    };
    this.getUser = function(id){
        return $http.get(urlBase+"/"+id);
    }

    this.addUser = function(u){
        return $http.post(urlBase, u);
    }
}])

angular.module('pickle-app').service('catalogDataService', ['$http', function($http){
    let catalogUrlBase = "http://bootapp-env.ucm3a324z6.us-east-2.elasticbeanstalk.com:8085/items";
    this.getCatalogItems = function(){
        return $http.get(catalogUrlBase);
    };
}])