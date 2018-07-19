angular.module('exercise-app',['ngRoute']);

angular.module('exercise-app').config(function($routeProvider){
   $routeProvider
   .when('/',{
       templateUrl: 'home.html'
   })
   .when('/view', {
       templateUrl: 'viewData/viewData.html',
       controller: 'get-view-ctrl'
   })
   .otherwise({
       redirectTo: '/'
   })
});

angular.module('exercise-app').service('dataService', ['$http', function($http){
    let urlBase = "http://bootapp-env.ucm3a324z6.us-east-2.elasticbeanstalk.com:8085/items";
    this.getData = function(){
        return $http.get(urlBase);
    };
}]);