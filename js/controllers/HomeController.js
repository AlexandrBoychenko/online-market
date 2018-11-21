app.controller("HomeController", ["$scope", "$routeParams", "photos", function($scope, $routeParams, photos) {
    photos.success(function(data) {
          //$scope.docData = data[$routeParams.id];
        })
}]);