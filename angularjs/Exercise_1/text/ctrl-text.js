

angular.module('exercise-1-app').controller('ctrl-text', function($scope) {
    let showBtn = document.getElementById("showBtn");

    $scope.init = function init() {
        $scope._initEvents();
    }

    $scope._initEvents = function initEvents() {

    }

    $scope.isDisplay = true;
    $scope.toggleText = function toggleText() {
        $scope.isDisplay = !$scope.isDisplay;
        showBtn.innerText = $scope.isDisplay ? "Hide" : "Show";
    }

    $scope.overStyle = function() {
        return {
            'background-color': 'lightblue',
        }
    }

    $scope.leaveStyle = function() {
        return { /* No style on leave */ };
    }
})