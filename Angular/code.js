// module (logical division of app)
angular.module('user-app',[]); // name, dependencies (other modules)

// declare a controller -- glue between the V and the M
// function called when controller loads. angular uses DI to give you your requested service
//what we put in the parameters are the services we want to use in the function
angular.module('user-app',[]).controller('helloCtrl',function($scope){ 

    $scope.helloWorld = function(){
        console.log($scope.pickle.flavor);
        return 'Hello ' + $scope.pickle.flavor;
    };

    // make ButtonWasClicked as truthy, so ng-if renders the div
    $scope.buttonClick = function(){
        $scope.buttonWasClicked = true;
    };

    $scope.clear = function(){
        $scope.buttonWasClicked = false;
    }

});