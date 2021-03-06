(function () {
    'use strict';

    angular
        .module('manage.products.module')
        .config(moduleConfig);

    // moduleConfig.$inject = ['$stateProvider'];

    function moduleConfig($stateProvider) {
        $stateProvider
            .state('plans', {
                abstract: true,
                data: {
                    access: '@'
                },
                url: '/plans',
                parent: 'default',
                views: {
                    content: {
                        template: '<ui-view/>'
                    }
                }

            })
            .state('plans.list', {
                url: '',
                controller: 'ProductsManageController',
                templateUrl: 'pages/manage_data/products/list/products-manage.html'
            })
            .state('plans.add', {
                url: '/add',
                controller: 'ProductsItemController',
                templateUrl: 'pages/manage_data/products/item/products-item.html'
            })
            .state('plans.item', {
                url: '/{product_id}',
                controller: 'ProductsItemController',
                templateUrl: 'pages/manage_data/products/item/products-item.html'
            });
    }
}());