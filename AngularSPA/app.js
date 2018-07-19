angular.module('pickle-app', ['ngRoute']);

angular.module('pickle-app').config( function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'home.html'
    })
    .when("/add", {
        templateUrl: 'add-user/add-view.html',
        controller: 'add-user-ctrl'
    })
    .when("/all", {
        templateUrl: 'all-users/all-view.html',
        controller: 'get-all-ctrl'
    })
    .when("/search", {
        templateUrl: 'search-user/search-view.html',
        controller: 'get-one-ctrl'
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