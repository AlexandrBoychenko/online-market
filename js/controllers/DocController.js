app.controller("DocController", ["$scope", "$routeParams", "photos", function($scope, $routeParams) {
    photos.success(function(data) {
            $scope.homeData = data;
        })
}]);