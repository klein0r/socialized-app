define([
    'app',
    'service/youtube',
    'directive/youtube-embed'
], function (app) {
    "use strict";

    app.controller('youtubeController', ['appConfig', '$scope', '$log', 'youtube', function (appConfig, $scope, $log, youtube) {
        "use strict";

        $log.debug("Init youtube controller");

        $scope.pageInfo = null;
        $scope.items = null;

        $scope.getMore = function() {
            youtube.fetchChannelVideos(appConfig.youtubeChannelId, function(data) {
                $scope.pageInfo = data.pageInfo;
                $scope.items = data.items;
            });
        };

        $scope.getMore();

    }]);
});
