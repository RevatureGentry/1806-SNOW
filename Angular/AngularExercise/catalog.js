console.log('start');
//angular.module('c-app',['ngRoute']);
console.log('c app');

angular.module('c-app',['ngRoute']).config(
    function($routeProvider){
        $routeProvider
        .when("/", {
            templateUrl: 'catalog-view.html',
            controller: 'catalog-controller'
    })
    .otherwise({redirectTo: '/'})
});
console.log('configed');

angular.module('c-app').service('dataService',['$http',
function($http){
    let urlBase = 'http://bootapp-env.ucm3a324z6.us-east-2.elasticbeanstalk.com:8085/items';
    console.log('url');
    this.getUsers = function(){
        console.log('function');
        return $http.get(urlBase);
    }
}])