(function() {
    'use strict';

    var businessNavbar = {
        bindings : {
        },
        controller : function($auth,$state,userService,$scope) {
            var vm = this;
            vm.logout = function() {
                $auth.logout();
                $state.go('login');
            };

            vm.userService = userService;
            vm.isAuthenticated = false;

            $scope.$watch($auth.isAuthenticated, function(newValue) {
                vm.isAuthenticated = newValue;
            });
        },
        templateUrl : 'components/navbar/business-navbar.html'
    };

    angular
        .module('app.components')
        .component('businessNavbar', businessNavbar);
}());