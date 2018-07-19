angular.module('pickle-app', ['ngRoute']);

angular.module('pickle-app').config( function config($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./home.html",
        })
        .when("/add", {
            templateUrl: "./add-user/add-user.html",
            controller: "add-user-ctrl",
        })
        .when("/search", {
            templateUrl: "./get-user/get-user.html",
            controller: "get-user-ctrl",
        })
        .when("/all", {
            templateUrl: "./get-all-users/get-all-users.html",
            controller: "get-all-ctrl",
        })
        .otherwise({
            redirectTo: "/",
        });
});

// again, name and then dependencies
angular.module('pickle-app').service('dataService', ['$http', function($http) {
    // 'this' refers to this service.
    let urlBase = 'http://192.168.61.182:8084/users';
    this.getUsers = function() {
        return $http.get(urlBase);
    };

    this.addUser = function(user) {
        return $http.post(urlBase, user);
    }

    this.getUser = function(id) {
        return $http.get(urlBase + "/" + id);
    }
}]);