angular.module('catalog-app', ['ngRoute']);

angular.module('catalog-app').config( function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'home.html'
    })
    .when('/text',{
        templateUrl :"text.html",
        controller :"textCtrl"
    })
    
   
    .when("/all", {
        templateUrl: 'all-items/all-items-view.html',
        controller: 'get-all-item-ctrl'
    })
   
    .otherwise({
        redirectTo: '/'
    })
});

