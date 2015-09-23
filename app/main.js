require.config({
    baseUrl: 'app',
    paths: {
        'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.4.6/angular.min',
        'angular-route': '//code.angularjs.org/1.4.6/angular-route.min',
        'jquery': '//code.jquery.com/jquery-latest.min',

        'menu': 'menu',

        'service/instagram': 'service/instagram',

        'controller/navigation': 'controller/navigation',
        'controller/home': 'controller/home',
        'controller/instagram': 'controller/instagram'
    },
    shim: {
        'angular': {
            'exports': 'angular'
        }
    },
    callback: function () {
        'use strict';

        require([
            'angular',
            'angular-route',
            'routing',
            'menu'
        ], function (angular) {
            //   init app
            console.debug("Bootstrap");
            angular.bootstrap(document, ['socializeApp']);
        });
    }
});
