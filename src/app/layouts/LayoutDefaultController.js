(function () {
    'use strict';

    angular
        .module('app')
        .controller('LayoutDefaultController', LayoutDefaultController);

    // LayoutDefaultController.$inject = ['$state'];

    /* @ngInject */
    function LayoutDefaultController($scope, BCService) {
        $scope.bc = BCService;
    }
}());