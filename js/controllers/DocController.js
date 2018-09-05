app.controller("DocController", ["$scope", "photos", function($scope, photos) {
    photos.success(function(data) {
            $scope.homeData = data;
        })
}]);