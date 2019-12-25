define(function(){
    var config = {
        router: {
            default_path: '/home',
            router_maps: [
                {
                    hash: '/home',
                    templateUrl: 'views/home.html',
                    dependencies: [
                        'controllers/HomeController',
                        'directives/SayHaloDirective',
                        'services/HomeService',
                        'filters/BookNameFilter'
                    ]
                },
                {
                    hash: '/about',
                    templateUrl: 'views/about.html',
                    dependencies: [
                        'controllers/AboutController'
                    ]
                },
                {
                    hash: '/qna',
                    templateUrl: 'views/qna.html',
                    dependencies: [
                        'controllers/QnaController'
                    ]
                }
            ]
        }
    };
    return config;
});
