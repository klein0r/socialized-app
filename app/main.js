require.config({
    baseUrl: 'app',
    paths: {
        'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.4.6/angular.min',
        'angular-route': '//code.angularjs.org/1.4.6/angular-route.min',
        'jquery': '//code.jquery.com/jquery-latest.min',
        'jquery-matchheight': '//cdnjs.cloudflare.com/ajax/libs/jquery.matchHeight/0.6.0/jquery.matchHeight-min'
    },
    shim: {
        'angular': {
            'exports': 'angular'
        },
        'jquery-matchheight': ['jquery']
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
