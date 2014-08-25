var learningModule = angular.module('learningModule',['ngRoute']);

//config routes using angular routeProvider

learningModule.config(['$routeProvider', function($routeProvider){

    $routeProvider.when('/search', {
        templateUrl: 'partials/searchAssignments.html'
    })
        .when('/upload', {
            templateUrl: 'partials/uploadAssignment.html'
        })
        .when('/dqp',{
            templateUrl: 'partials/DQP.html'
        })
        .when('/', {
            templateUrl: 'partials/niloa.html'
        })
        .otherwise({
           redirectTo: '/'
        });

    //$locationProvider.html5Mode(true);
}]);