angular.module('exercise-app').controller('text-ctrl', function($scope) {
    $scope.highlight = function (){
        $scope.myStyle = {'background-color':'blue'};
    };
    $scope.none = function(){
        $scope.myStyle = {};
    };
    var pressed = false;
    $scope.toggle = function(){
        pressed ? $scope.myStyle = {'display' : 'inline'} :
        $scope.myStyle = {'display' : 'none'};
        pressed = !pressed;
    };
});