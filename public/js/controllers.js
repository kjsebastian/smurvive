angular.module('app.controllers', ['ngResource'])
    .controller('CommentCtrl', ['$scope', '$resource', function ($scope, $resource) {
        var Comment = $resource('/comment/:commentId', {commentId : '@id'});

        var comments = Comment.query();
        $scope.comments = comments;
    }]);