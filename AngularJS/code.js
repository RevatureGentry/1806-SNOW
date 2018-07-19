// module (logical division of application)
angular.module('user-app', []); //name, dependencies (other modules)
// DO NOT var app = the above

// declare a controller -- glue between view and model
// called when controller loads. angular uses depenency injection to give services
angular.module('user-app').controller('helloCtrl', function($scope) {
    
    $scope.helloWorld = function() {
        console.log($scope.pickle.flavor);
        $scope.pickle.smell =  'Hello, ' + $scope.pickle.flavor;
    };

    $scope.buttonClick = function() {
        $scope.buttonWasClicked = true;
    };

    $scope.clear = function() {
        $scope.buttonWasClicked = false;
    };

});