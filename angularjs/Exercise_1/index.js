

angular.module('exercise-1-app', ['ngRoute']);

angular.module('exercise-1-app').config(function config($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: "./home/view-home.html",
        })
        .when("/catalog", {
            templateUrl: "./catalog/view-catalog.html",
            controller: "ctrl-catalog",
        })
        .when("/text", {
            templateUrl: "./text/view-text.html",
            controller: "ctrl-text",
        })
        .otherwise({
            redirectTo: "/",
        });
});