(function() {
    'use strict';

    angular
        .module('app.pages.main')
        .controller('MainIndexController', MainIndexController);

    MainIndexController.$inject = ['BCService'];

    function MainIndexController(BCService) {
        BCService
            .reset()
            .setShowBC(true)
            .addCrumb({name: 'Dashboard', path: 'home'})
            .setPageTitle('Dashboard');
    }
}());