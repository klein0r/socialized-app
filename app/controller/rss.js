define([
    'app',
    'service/rss'
], function (app) {
    "use strict";

    app.controller('rssController', ['$scope', '$interval', '$log', 'rss', function ($scope, $interval, $log, rss) {
        "use strict";

        $log.debug("Init rss controller");

        $scope.feedSrc = 'http://elegant-kochen.de/feed/';

        $scope.getMore = function() {
            rss.parseFeed($scope.feedSrc).then(function(res){
                $scope.feeds = res.data.responseData.feed.entries;
            });
        };

        $scope.getMore();

    }]);
});
