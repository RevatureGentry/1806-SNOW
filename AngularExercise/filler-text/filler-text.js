
isVisible = true;
angular.module('lol-app').controller('filler-fun-ctrl', function ($scope) {
    $scope.changeColor = function (flag) {
        if(flag){
            $scope.personColour = {
                backgroundColor: '#ff00ff'
            };
        }
        else{
            $scope.personColour = {
                backgroundColor: '#ffffff'
            }
        }
    };
    $scope.setVisibility = function () {
        if(isVisible){
            isVisible = false;
            $scope.personColour = {
                    visibility: 'hidden'
            }
            console.log("hey");
            
        }
        else{
            isVisible = true;
            $scope.personColour = {
                visibility: 'visible'
            }
            console.log("you");
        }
    }

});