define([
    'app'
], function (app) {
    "use strict";

    app.controller('navigationController', ['appConfig', '$scope', '$log', function (appConfig, $scope, $log) {
        "use strict";

        $log.debug("Init navigation controller");

        $scope.menuItems = [
            {
                route: '/',
                name: 'Home'
            },
            {
                route: '/instagram',
                name: 'Instagram'
            },
            {
                route: '/rss',
                name: 'Blog'
            },
            {
                route: '/youtube',
                name: 'YouTube'
            }
        ];

    }]);
});
