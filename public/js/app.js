var app = angular.module('smurvive', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/complaints', {templateUrl: 'complaints.html', controller: ComplaintCtrl})
            .when('/compliments', {templateUrl: 'compliments.html', controller: ComplimentCtrl});
})

function ComplaintCtrl() {

}

function ComplimentCtrl() {

}