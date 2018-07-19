//module (logical division of the app)
angular.module('user-app', []); //name, dependencies(other moduels)
//decalar a controler -- glue between view and the model
//function called when controller loads. angular uses DI to give you your requested services
angular.module('user-app').controller('helloCTRL',function($scope){

    $scope.helloWorld = function(){
        console.log($scope.pickle.flavor);
        return 'Hello, ' + $scope.pickle.flavor;
    };

    //make buttonWasClicked as truthy, so ng-if renders the div
    $scope.buttonClick = function(){
        $scope.buttonWasClicked = true;
    };
    $scope.clear = function(){
        $scope.buttonWasClicked = false;
    };
});
