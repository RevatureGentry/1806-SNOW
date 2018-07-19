//Declare an Angular Module

//var app = angular.module is a BAD IDEA. It's less explicit (harder to read), and is performance-heavy.
angular.module('user-app', []); //angular.module(name, dependencies); (Dependencies are to other modules)

//Declare a controller to control/glue the view and the model together. (V & the M are glued together)
//Controllers don't necessarily store the data, they just direct the flow. 
angular.module('user-app').controller('helloCtrl', 
    function($scope) { //Dependency Injection - put in the services you want to utilize in the controller as parameters, and angular will give it to you.
    //When the controller loads, this function is called.
    $scope.helloWorld = function() {
        console.log($scope.pickle.flavor);
        return 'Hello, ' + $scope.pickle.flavor;
    } //These functions are just defined, not called.

    //Make buttonWasClicked as truthy, so ng-if renders the div.
    $scope.buttonClick = function() {
        $scope.buttonWasClicked = true;
    }

    $scope.clear = function() {
        $scope.buttonWasClicked = false;
    }
});