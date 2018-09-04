app.controller('MainController', ['$scope', function($scope) {
    $scope.move = {
        icon: 'img/flower.jpg',
        title: 'MOVE',
        developer: 'MOVE, Inc.',
        price: 0.99
    };

    $scope.shutterbugg = {
        icon: 'img/whirl.jpg',
        title: 'Shutterbugg',
        developer: 'Chico Dusty',
        price: 2.99
    };

    $scope.gameboard = {
        icon: 'img/dog.jpg',
        title: 'Gameboard',
        developer: 'Armando P.',
        price: 1.99
    };

    $scope.forecast = {
        icon: 'img/girl.jpg',
        title: 'It\'s my forecast',
        developer: 'Alex B',
        price: 5.67
    };

    $scope.apps = [
        {
            icon: 'img/flower.jpg',
            title: 'MOVE',
            developer: 'MOVE, Inc.',
            price: 0.99
        },
        {
            icon: 'img/whirl.jpg',
            title: 'Shutterbugg',
            developer: 'Chico Dusty',
            price: 2.99
        },
        {
            icon: 'img/dog.jpg',
            title: 'LOVE',
            developer: 'LOVE, Inc.',
            price: 5.99
        },
        {
            icon: 'img/girl.jpg',
            title: 'Bugg',
            developer: 'Bugg Chisco',
            price: 80.99
        }
    ]
}]);