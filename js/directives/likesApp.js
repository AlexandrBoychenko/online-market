app.directive('likesApp', function() {
    return {
        restrict: 'E',
        scope: {

        },
        templateUrl: 'js/directives/likesApp.html',
        link: function(scope, element, attr) {
            element.addClass('red-element');
            scope.likes = 0;
            scope.dislikes = 0;
            scope.download = function() {
                scope.likes += 1;
            };
            scope.upload = function() {
                scope.dislikes += 1;
            }
        }
    }
});