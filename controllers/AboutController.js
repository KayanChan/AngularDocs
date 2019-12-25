define(function(){
    var app = angular.module('app');
    app.controller('AboutController', ['$scope', function($scope){
        console.log('AboutController OK');
    }]);
    return app;
});
