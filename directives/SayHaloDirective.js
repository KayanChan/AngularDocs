define(function(){
    var app = angular.module('app');
    console.log(app);
    app.directive('sayHalo', function(){
        return {
            restrict: 'EA',
            scope: {},
            template: '<div>I am a directive -- sayHalo.  from <i>directives/SayHaloDirective.js</i></div>'
        }
    });
    return app;
});
