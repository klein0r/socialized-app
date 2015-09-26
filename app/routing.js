define([
    'app',
    'controller/navigation',
    'controller/home',
    'controller/instagram',
    'controller/rss'
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
                })

                .when('/rss', {
                    templateUrl: 'pages/rss.html',
                    controller: 'rssController'
                });

        }
    ]);
});
