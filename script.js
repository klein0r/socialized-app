var socializeApp = angular.module('socializeApp', []);

socializeApp.controller('homeController', ['$scope', function ($scope) {
    "use strict";

    $scope.menuItems = [
        {
            route: '#home',
            name: 'Home'
        },
        {
            rout: '#instagram',
            name: 'Instagram'
        }
    ];

}]);
