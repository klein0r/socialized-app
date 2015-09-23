

define([
    'app',
    'controller/navigation',
    'controller/home',
    'controller/instagram'
], function (app) {
    'use strict';

    app.config([
        '$routeProvider',
        function ($routeProvider) {

            console.debug("Creating routes...");

            $routeProvider
                .when('/', {
                    templateUrl: 'pages/home.html',
                    controller: 'homeController'
                })

                .when('/instagram', {
                    templateUrl: 'pages/instagram.html',
                    controller: 'instagramController'
                });

        }
    ]);
});
