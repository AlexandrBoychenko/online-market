var app = angular.module('AppMarketApp', ['ngRoute']);

app.config(function($routeProvider) {
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
});