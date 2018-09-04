app.directive('appInfo', function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'js/directives/appInfo.html',
        link: function(scope, element, attr) {
            
        }
    };
});