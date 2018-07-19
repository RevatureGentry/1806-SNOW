//module (logical division of the app)
angular.module('user-app', []); //name, dependencies (other modules)

//declare a controller -- glue between V and the M
//if i want to get $scope into function i can just put it there - dependency injection
//angular uses dependency injection to give you your requested services
angular.module('user-app').controller('helloCtrl', function($scope) {//function called when controller loads
    $scope.helloWorld = function(){
        console.log($scope.pickle.flavour);
        return 'Hello, ' + $scope.pickle.flavour;
    };
    //make buttonWasClicked as truthy, so ng-if renders the div
    $scope.buttonClick = function() {
        $scope.buttonWasClicked = true;
    }

    $scope.clear = function(){
        $scope.buttonWasClicked = false;
    }
});