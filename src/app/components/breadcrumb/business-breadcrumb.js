(function() {
    'use strict';

    var businessBreadcrumb = {
        bindings : {

        },
        controller : function(BCService) {
            this.breadcrumbs = BCService;
        },
        templateUrl : 'components/breadcrumb/business-breadcrumb.html'
    };

    businessBreadcrumb.$inject = ['BCService'];

    angular
        .module('app.components')
        .component('businessBreadcrumb', businessBreadcrumb);
}());