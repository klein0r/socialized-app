define([
    'app'
], function (app) {
    "use strict";

    app.factory('youtube', ['$http', 'appConfig', function($http, appConfig) {
        return {
            fetchChannelVideos: function(channelId, callback) {

                var youtubeApiKey = appConfig.youtubeApiKey;
                var endPoint = "https://www.googleapis.com/youtube/v3/search?key=" + youtubeApiKey + "&channelId=" + channelId + "&part=snippet,id&order=date&maxResults=20&callback=JSON_CALLBACK";

                $http.jsonp(endPoint).success(function(response) {
                    callback(response);
                });
            }
        }
    }]);
});
