define([
    'app',
    'service/instagram'
], function (app) {
    "use strict";

    app.controller('instagramController', ['$scope', '$interval', '$log', 'instagram', function ($scope, $interval, $log, instagram) {
        "use strict";

        $log.debug("Init instagram controller");

        $scope.pics = [];
        $scope.have = [];

        $scope.getMore = function() {
            instagram.fetchPopular(function(data) {
                for(var i=0; i<data.length; i++) {
                    if (typeof $scope.have[data[i].id]==="undefined") {
                        $scope.pics.push(data[i]) ;
                        $scope.have[data[i].id] = "1";
                    }
                }
            });
        };

        $scope.getMore();

    }]);
});
