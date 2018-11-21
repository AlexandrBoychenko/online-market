app.controller('MainController', ['$scope', 'wikipedia', function($scope, wikipedia) {
    $scope.apps = [
        {
            icon: 'img/flower.jpg',
            title: 'MOVE',
            developer: 'MOVE, Inc.',
            price: 0.99,
            likes: 0,
            dislikes: 0
        },
        {
            icon: 'img/whirl.jpg',
            title: 'Shutterbugg',
            developer: 'Chico Dusty',
            price: 2.99,
            likes: 0,
            dislikes: 0
        },
        {
            icon: 'img/dog.jpg',
            title: 'LOVE',
            developer: 'LOVE, Inc.',
            price: 5.99,
            likes: 0,
            dislikes: 0
        },
        {
            icon: 'img/girl.jpg',
            title: 'Bugg',
            developer: 'Bugg Chisco',
            price: 80.99,
            likes: 0,
            dislikes: 0
        }
    ];

    this.orderProp = 'price';

    wikipedia.success(function(data) {
        $scope.wikiPic = data.days[0].icon;
    })
}]);
