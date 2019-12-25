define(function(){
    var app = angular.module('app');
    app.filter('bookName', function(){
        return function(input){
            return '<<' + input + '>>';
        };
    });
    return app;
});
