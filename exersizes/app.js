angular.module('myApp',['ngRoute']);

angular.module('myApp').config( function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: ''
    })
    .when("/view", {
        templateUrl: './view.html'
    })
    .otherwise({
        redirectTo: '/'
    })
});
angular.module('myApp').controller('catalog',function($scope,$http){
	$scope.getItems = function(){
		$http.get('http://bootapp-env.ucm3a324z6.us-east-2.elasticbeanstalk.com:8085/items').then(function(response){
				console.log(response.status);
				$scope.items = response.data;
		});
	};
	
	
});


