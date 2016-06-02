'use strict';
angular.module('home.view2', ['ui.router'])
    .config(['$stateProvider', function($stateProvider){
        $stateProvider.state('view2', {
            url: '/view2',
            title: '首页',
            templateUrl: 'view2/view2.html',
            controller: function () {
                console.log(123);
                this.name = "lyc";
            },
            controllerAs: 'vm',
            bindToController: true
        });
    }]);