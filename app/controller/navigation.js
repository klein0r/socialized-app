define([
    'app'
], function (app) {
    "use strict";

    app.controller('navigationController', ['$scope', '$log', function ($scope, $log) {
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
            }
        ];

    }]);
});
