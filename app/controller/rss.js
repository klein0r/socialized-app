define([
    'app',
    'service/rss'
], function (app) {
    "use strict";

    app.controller('rssController', ['appConfig', '$scope', '$log', 'rss', function (appConfig, $scope, $log, rss) {
        "use strict";

        $log.debug("Init rss controller");

        $scope.getMore = function() {
            rss.parseFeed(appConfig.feedUrl).then(function(res){
                $scope.feeds = res.data.responseData.feed.entries;
            });
        };

        $scope.getMore();

    }]);
});
