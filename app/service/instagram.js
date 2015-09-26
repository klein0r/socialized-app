define([
    'app'
], function (app) {
    "use strict";

    app.factory('instagram', ['$http', 'appConfig', function($http, appConfig) {
        return {
            fetchUserPhotos: function(instagramUserId, callback) {

                var instagramAppId = appConfig.instagramAppId;
                var endPoint = "https://api.instagram.com/v1/users/" + instagramUserId + "/media/recent/?client_id=" + instagramAppId + "&callback=JSON_CALLBACK";

                $http.jsonp(endPoint).success(function(response) {
                    callback(response.data);
                });
            }
        }
    }]);
});
