require.config({
    paths: {
        'angular': 'http://apps.bdimg.com/libs/angular.js/1.3.13/angular.min',
        'angular-route': 'http://apps.bdimg.com/libs/angular-route/1.3.13/angular-route',
        'global_config': 'config'
    },
    shim: {
        'angular': {
                exports: 'angular'
            },
        'angular-route': {
            deps: ['angular'],
            exports: 'ngRoute'
        }
    },
    waitSeconds: 0
});

define(['global_config', 'angular', 'angular-route'], function(config, angular) {
    var app = angular.module('app', ['ngRoute']);
    console.log(app);
    app.config(['$routeProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', function($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide){

        app.controller = $controllerProvider.register;
        app.directive = $compileProvider.directive;
        app.filter     = $filterProvider.register;
        app.factory    = $provide.factory;

        /*
        $routeProvider.when('/home', {
            templateUrl: 'views/home.html',
            resolve: {
                'data': function($q, $rootScope){
                    var defer = $q.defer();
                    require(['controllers/HomeController'], function(){
                        defer.resolve();
                        $rootScope.$apply();
                    });
                    return defer.promise;
                }
            }
        }).when('/about', {
            templateUrl: 'views/about.html',
            resolve: {
                'data': function($q, $rootScope){
                    var defer = $q.defer();
                    require(['controllers/AboutController'], function(){
                        defer.resolve();
                        $rootScope.$apply();
                    });
                    return defer.promise;
                }
            }
        }).when('/qna', {
            templateUrl: 'views/qna.html',
            resolve: {
                'data': function($q, $rootScope){
                    var defer = $q.defer();
                    require(['controllers/QnaController'], function(){
                        defer.resolve();
                        $rootScope.$apply();
                    });
                    return defer.promise;
                }
            }
        }).otherwise({
            redirectTo: '/home'
        });*/
        function setDependencies(dependencies){
            var resolveResult = function($q, $rootScope){
                var defer = $q.defer();
                require(dependencies, function(){
                    defer.resolve();
                    $rootScope.$apply();
                });
                return defer.promise;
            };
            return resolveResult;
        }

        if(config.router.router_maps && angular.isArray(config.router.router_maps) && config.router.router_maps.length){
            angular.forEach(config.router.router_maps, function(v, k){
                $routeProvider.when(v.hash, {
                    templateUrl: v.templateUrl,
                    resolve: {
                        'data': setDependencies(v.dependencies)
                    }
                });
            });
        }

        if(config.router.default_path){
            $routeProvider.otherwise({
                redirectTo: config.router.default_path
            });
        }
    }]);

    app.run(['$rootScope', '$location', function($rootScope, $location){
        $rootScope.$on('$locationChangeStart', function(){
            console.log($location.path().slice(1));
        });
    }]);

    app.controller('MainController', ['$scope', function($scope){
        $scope.navs = [
            {hash: '#/home', text: '首页'},
            {hash: '#/about', text: '关于'},
            {hash: '#/qna', text: 'Q&A'}
        ];
    }]);

    angular.bootstrap(document, ['app']);
    return app;
});
