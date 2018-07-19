angular.module('cake-app').controller('filler-text-ctrl', function($scope) {
	$scope.clearText = function() {
        displays =  document.getElementById('myText');
        buttons = document.getElementById('myBtn');
        displays.style.display = 'none';
        buttons.style.display = 'none'
    };
})