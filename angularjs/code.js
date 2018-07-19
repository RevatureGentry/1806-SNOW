
// Declare an angular module  (a logical division of the app)

// (name, dependencies)
angular.module('user-app', []); // Declare a module with no dependencies

// var app = angular.module('name', dep) IS A TERRIBLE WAY TO DO THINGS, says Patrick.
// less readable and less performant.

// Controller is glue between view and model
// Angular calls the callback function when the controller knows, and can
// pass it it the services. Any number of services. As dependency injection.
angular.module('user-app').controller('helloCtrl', function($scope) { // declares a controller
    $scope.helloWorld = function sayHello() {
        console.log($scope.pickle.flavor); // log the scope's pickle flavor.
        return 'Hello, ' + $scope.pickle.flavor;
    };

    $scope.buttonClick = function clicked() {
        console.log("WAS CLICKED");
        $scope.buttonWasClicked = true;
    };

    $scope.clear = function clear() {
        $scope.buttonWasClicked = false;
    };
});