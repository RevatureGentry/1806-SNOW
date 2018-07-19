angular.module('catalog-app').controller('textview-ctrl', function($scope, dataFinder) {
    var txtVisibile = true;
    $scope.txtHoverEnter = function() {
        $scope.txtStyle = {
            'text-align':'left',
            'background-color':'#E6E6FA',
            'text-color':'black'
        };
    }
    $scope.txtHoverExit = function() {
        $scope.txtStyle = {
            'text-align':'left',
            'background-color':'beige',
            'text-color':'black'
        };
    }
    $scope.toggleText = function() {
        (txtVisibile) ? $scope.txtStyle = {'visibility':'hidden'} : $scope.txtStyle = {'visibility':'visible'};
        txtVisibile = !txtVisibile;
    }
});