var visible = true;
angular.module('pickle-app').controller('filler-view-ctrl', function($scope){
    $scope.changeColor = function(t){
        if(t === true){
            $scope.myStyle = {
                backgroundColor: 'red'
            }
        }
        else{
            $scope.myStyle = {
                backgroundColor:'white'
            }
        }
    }
    $scope.buttonClick2 = function(){
        if(visible == true){
            $scope.myStyle = {
                visibility: 'hidden'
                
            }
            visible = false;
        }
        else{
            $scope.myStyle = {
                visibility: 'visible'
            }
            visible = true;
        }

    }
});