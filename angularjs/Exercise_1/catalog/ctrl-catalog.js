

angular.module('exercise-1-app').controller('ctrl-catalog', function($scope, $http) {
    var url = "http://bootapp-env.ucm3a324z6.us-east-2.elasticbeanstalk.com:8085/items";
    $scope.refresh = function refresh() {
        console.log("CALLED");
        $http.get(url).then(function (response) {
            console.log(response);
            $scope.items = response.data;
        });
    }
});