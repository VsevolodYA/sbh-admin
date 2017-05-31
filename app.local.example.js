(function() {
    'use strict';

    var CONFIG = {
        "title" : "BusinessCenter Admin",
        "tokenParam" : "access-token",
        "api" : "http://localhost:8000",
        "url" : {
            "static" : ""
        }
    };

    angular
        .module('app')
        .constant('CONFIG', CONFIG);
}());