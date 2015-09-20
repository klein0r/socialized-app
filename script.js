var socializeApp = angular.module('socializeApp', ['ngRoute']);

socializeApp.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })

        .when('/instagram', {
            templateUrl: 'pages/instagram.html',
            controller: 'instagramController'
        });

});

socializeApp.controller('navigationController', ['$scope', function ($scope) {
    "use strict";

    $scope.menuItems = [
        {
            route: '/',
            name: 'Home'
        },
        {
            route: '/instagram',
            name: 'Instagram'
        }
    ];

}]);

socializeApp.controller('homeController', ['$scope', function ($scope) {
    "use strict";



}]);

socializeApp.controller('instagramController', ['$scope', function ($scope) {
    "use strict";



}]);
