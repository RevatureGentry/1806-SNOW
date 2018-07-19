angular.module('banana-stand', ['ngRoute']);

angular.module('banana-stand').config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'home.html'
    })
    .when('/catalog', {
        templateUrl: 'catalog-items/catalog-view.html',
        controller: 'get-catalog-ctrl'
    })
    .when('/text', {
        templateUrl: 'text-view/text-view.html',
        controller: 'get-text-ctrl'
    })
    // .when('/search', {
    //     templateUrl: 'search-catalog/search-view.html',
    //     controller: 'search-ctrl'
    // })
    .otherwise({
        redirectTo: '/'
    })
});

angular.module('banana-stand').service('dataService', ['$http', function($http){
    console.log('dataService');
    let urlBase = 'http://bootapp-env.ucm3a324z6.us-east-2.elasticbeanstalk.com:8085/items';
    this.getCatalog = function() {
        console.log('more stuff');
        return $http.get(urlBase);
    };
}]);