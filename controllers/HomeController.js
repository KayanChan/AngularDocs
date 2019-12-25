define(function(){
    var app = angular.module('app');
    app.controller('HomeController', ['$scope', 'HomeService', function($scope, HomeService){
        console.log('HomeController OK');

        HomeService.getInitData().then(function(data){
            console.log(data);
        }, function(error){
            console.log(error);
        });

        $scope.book_name = 'Half of An Apple';
    }]);
    return app;
});
