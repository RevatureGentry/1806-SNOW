//Declare and initialize the module.
angular.module('catalog-app', ['ngRoute']);

angular.module('catalog-app').config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'home.html'
    })
    .when('/catalog', {
        templateUrl: 'catalog/catalog-view.html',
        controller: 'catalog-ctrl'
    })
    .when('/textview', {
        templateUrl: 'textview/textview-view.html',
        controller: 'textview-ctrl'
    })
    .otherwise({
        redirectTo: '/'
    })
});

angular.module('catalog-app').service('dataFinder', ['$http',
    function($http) {
        let urlBase = "http://bootapp-env.ucm3a324z6.us-east-2.elasticbeanstalk.com:8085/items";
        this.getAllItems = function() {
            return $http.get(urlBase);
        }
        
    }]);