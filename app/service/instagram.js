define([
    'app'
], function (app) {
    "use strict";

    app.factory('instagram', ['$http', function($http) {
        return {
            fetchUserPhotos: function(callback) {

                var endPoint = "https://api.instagram.com/v1/users/1682642124/media/recent/?client_id=642176ece1e7445e99244cec26f4de1f&callback=JSON_CALLBACK";

                $http.jsonp(endPoint).success(function(response) {
                    callback(response.data);
                });
            }
        }
    }]);
});
