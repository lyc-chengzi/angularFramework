'use strict';
// Declare app level module which depends on views, and components
angular.module('home', [
    /*angular resource 服务模块*/
    'ngResource',
    /*angular-ui-router 模块*/
    'ui.router',
    /*list 模块*/
    'home.view1',
    /*detail 模块*/
    'home.view2',
    /*version 模块*/
    'app.version'

]).config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
}]).run(function () {
    console.log('angularjs is running');
});
