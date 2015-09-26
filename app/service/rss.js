define([
    'app'
], function (app) {
    "use strict";

    app.factory('rss', ['$http', function($http) {
        return {
            parseFeed : function(url){
                return $http.jsonp('https://ajax.googleapis.com/ajax/services/feed/load?v=2.0&num=10&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
            }
        }
    }]);
});
