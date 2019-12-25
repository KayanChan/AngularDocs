var app = angular.module('app', ['ui.router']);
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('layout', {
            url:'/',
            templateUrl: 'tpl/layout.html'
        })
}]);