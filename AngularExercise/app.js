angular.module('lol-app', ['ngRoute']);

angular.module('lol-app').config(function ($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'home.html'
    })
    .when("/display-all", {
        templateUrl: 'display-all/display-all.html',
        controller: 'display-all-ctrl'
    })
    .when("/filler-text", {
        templateUrl: 'filler-text/filler-text.html',
        controller: 'filler-fun-ctrl'
    })
    .otherwise({
        redirectTo: '/'
    })
    
});

angular.module('lol-app').service('dataService', ['$http', function($http){
    let urlBase = "http://bootapp-env.ucm3a324z6.us-east-2.elasticbeanstalk.com:8085/items";
    this.getItems = function(){
        return $http.get(urlBase);
    }
    /*
    this.getUsers = function(){
        return $http.get(urlBase);
    };
    */
    

}])

console.log("sry");
