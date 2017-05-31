(function() {
    'use strict';

    angular
        .module('app.pages.main')
        .config(moduleConfig);

    moduleConfig.$inject = ['$stateProvider'];

    function moduleConfig($stateProvider) {
        $stateProvider
            .state('home', {
                data: {
                    access: '@'
                },
                parent : 'default',
                url : '/',
                views : {
                    content : {
                        controller : 'MainIndexController',
                        templateUrl : 'pages/main/index/main-index.html'
                    }
                }
            })
            .state('login', {
                data: {
                    access: '?'
                },
                parent : 'blank',
                url : '/login',
                views : {
                    content : {
                        controller : 'MainLoginController as vm',
                        templateUrl : 'pages/main/login/main-login.html'
                    }
                }
            });
    }
}());