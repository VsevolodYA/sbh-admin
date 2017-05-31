(function() {
    'use strict';

    angular
        .module('app',
            [
                'templates',

                'ngAnimate',
                'ngSanitize',

                'ui.router',
                'ui.select',
                'ui.bootstrap',
                'satellizer',
                'toaster',
                'restangular',
                'ngTable',
                'frapontillo.bootstrap-switch',

                'app.filters',
                'app.services',
                'app.components',
                'app.directives',
                'app.pages'
            ]);
}());