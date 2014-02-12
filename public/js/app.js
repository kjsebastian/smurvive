var app = angular.module('smurvive', ['ngRoute', 'app.controllers', 'app.directives']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/complaints', {
            templateUrl: 'complaints.html',
            controller: 'ComplaintCtrl'
        })
        .when('/compliments', {
            templateUrl: 'compliments.html',
            controller: 'ComplimentCtrl'
        })
        .when('/comments', {
            templateUrl: 'views/partials/comments.html',
            controller: 'CommentCtrl'
        });
}]);

/*//Setting HTML5 Location Mode
app.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.html5Mode(true);
    }
]);*/

function ComplaintCtrl() {

}

function ComplimentCtrl() {

}