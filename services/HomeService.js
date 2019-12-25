define(function(){
    var app = angular.module('app');
    app.factory('HomeService', function($q, $http){
        return {
            getInitData: getInitData
        }

        function getInitData(){
            var deffered = $q.defer();

            $http.get('https://hq.tigerbrokers.com/fundamental/finance_calendar/getType/2017-02-26/2017-06-10').success(function(data){
                deffered.resolve(data);
            }).error(function(){
                deffered.reject('服务器错误')
            });

            return deffered.promise;
        }
    });
    return app;
});
