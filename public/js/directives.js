angular.module('app.directives', [])
    .directive('highlight', function(){
        return function(scope, element) {
            element.bind("click", function() {
                element.parent().addClass("active");

            });
        }
    });