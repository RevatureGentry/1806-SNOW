angular.module("cake-app",['ngRoute']);

angular.module('cake-app').config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:"home.html"
    })
    .when("/all", {
        templateUrl: './all-display-ctrl/all-display-view.html',
        controller: 'all-display-ctrl'
    })
    .when('/filler',{
        templateUrl: './filler-text-ctrl/filler-text.html',
        controlller: 'filler-text-ctrl'
    })
    .otherwise({
        redirectTo: '/'
    })
});

angular.module('cake-app').service('dataService', ['$http', function($http){
    var urlBase = 'http://bootapp-env.ucm3a324z6.us-east-2.elasticbeanstalk.com:8085/items';
    
    this.getItems = function(){
        return $http.get(urlBase);
    }
}])