(function (angular) {
    'use strict';

    angular.module('angularBP')
        .config(appConfig)
        .run(appRun);

    function appConfig($stateProvider, $locationProvider) {

        $locationProvider.html5Mode(true);
        $stateProvider
    
            .state('home', {
                url: "/home",
                templateUrl: '/components/home/home.html'
            });
    }

    function appRun() {

    }

})(angular);