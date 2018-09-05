var app = angular.module('AppMarketApp', []);

app.config('routeUrl', ["$routeProvider", function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'DocController',
            templateUrl: 'views/docTemplate.html'
        })
        .when('/doc/:id', {
            controller: 'HomeController',
            templateUrl: 'views/homeTemplate.html'
        })
        .otherwise({
            redirectTo: '/'
        })
}]);