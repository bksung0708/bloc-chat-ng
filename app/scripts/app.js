(function() {
    function config($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/templates/home.html'
        });
    }
    angular
        .module('blocChat', ['ui.router', 'firebase'])
        .config(config);
})();