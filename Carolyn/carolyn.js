angular.module('carolyn-app', ['ngRoute']);

angular.module('carolyn-app').config(
    function($routeProvider){
        $routeProvider
            .when('/', {templateUrl: 'home.html'})
            .when('/all', {templateUrl: 'carolyn-view.html', controller: 'carolyn-ctrl'})
            .otherwise({redirectTo: '/'})
    }
);

angular.module('carolyn-app').service('dataService', ['$http', 
function($http){
    let urlBase = 'http://bootapp-env.ucm3a324z6.us-east-2.elasticbeanstalk.com:8085/items';
    this.getUsers = function(){
        return $http.get(urlBase);
    };
}]);