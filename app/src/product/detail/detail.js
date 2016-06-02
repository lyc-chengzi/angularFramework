'use strict';
angular.module('product.detail', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('detail.test', {
                url: '/test',
                templateUrl: 'detail/testDetail.html'
            });
    }]);
