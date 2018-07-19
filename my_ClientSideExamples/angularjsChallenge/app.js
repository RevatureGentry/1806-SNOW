angular.module('Ang-Challenge',['ngRoute'])

angular.module('Ang-Challenge').config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'home.html'
    })
    .when('/catalog',{
        templateUrl:'catalog/catalog.html',
        controller: 'catalog-ctrl'
    })
    .when('/text',{
        templateUrl: 'textFiller/textFiller.html'
    })
    .otherwise({
        redirectTo: '/'
    })
});

angular.module('Ang-Challenge').service('dataService',['$http', function($http){
    let baseURL = 'http://bootapp-env.ucm3a324z6.us-east-2.elasticbeanstalk.com:8085/items';
    this.getItems = function(){
        return $http.get(baseURL);
    };
}]);