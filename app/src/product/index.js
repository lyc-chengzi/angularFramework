'use strict';
// Declare app level module which depends on views, and components
angular.module('product', [
    /*angular resource 服务模块*/
    'ngResource',
    /*angular-ui-router 模块*/
    'ui.router',
    /*list 模块*/
    'product.list',
    /*detail 模块*/
    'product.detail'

]).config(['$stateProvider', function ( $stateProvider) {
    $stateProvider
        .state('default', {
            url: '/',
            controller: ['$state', function($state){
                console.log($state);
                $state.go('list');
            }]
        })
        .state('list', {
            url: 'list',
            title: '产品列表页',
            templateUrl: 'list/list.html',
            controller: function () {
                this.name = "lyc";
            },
            controllerAs: 'vm',
            bindToController: true
        })
        .state('detail', {
            url: 'detail',
            title: '产品列表页',
            templateUrl: 'detail/detail.html',
            controller: function () {
                this.name = "lyc";
            },
            controllerAs: 'vm',
            bindToController: true
        });
}]).run(function () {
    console.log('angularjs is running');
});
