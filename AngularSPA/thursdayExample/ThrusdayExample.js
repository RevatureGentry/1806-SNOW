// Create an application using AngularJS/HTML/CSS
// - Create a controller which displays catalog items on a corresponding view
// - each item id, name, price, and an image of that item should be displayed
// - use the currency filter to display the prices
// - use the order by filter to order them by price
// - this should be done using a service to make an http call to an API endpoint
// - that endpoint can be found here: http://bootapp-env.ucm3a324z6.us-east-2.elasticbeanstalk.com:8085/items
// - Create a view which includes some filler text. When hovering over the text, the background should be highlighted with the color of your choice (look into ng-style). Include a button that clicking will toggle between showing and hiding the text.
// - incorporate routing in order to navigate between the text view, the catalog view, and a home view to create a SPA
// - make all of your views aesthetically pleasing (bootstrap, css)

angular.module('cat-app', ['ngRoute']);

angular.module('cat-app').config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'thurs-home.html'
    })
    .when('/cat', {
        templateUrl: 'cat-view.html',
        controller: 'cat-ctrl-all'
    })
    .when('/desc', {
        templateUrl: 'cat-desc-view.html',
        controller: 'cat-desc'
    })
    .otherwise({
        redirectTo: '/'
    })
});

angular.module('cat-app').service('dataService', ['$http', function($http){
    
    let urlBase = "http://bootapp-env.ucm3a324z6.us-east-2.elasticbeanstalk.com:8085/items";
    
    this.getCat = function(){
        return $http.get(urlBase);
    };

}])