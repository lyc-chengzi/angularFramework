'use strict';
angular.module('home.view1', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('view1', {
            url: '/view1',
            title: '首页',
            templateUrl: 'view1/view1.html',
            controller: function () {
                this.name = "lyc";
            },
            controllerAs: 'vm',
            bindToController: true
        });
    }]);
