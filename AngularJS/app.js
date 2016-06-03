var app = angular.module("myApp", []);

app.controller('appCtrl', function($scope){
    $scope.index = [
        {
            title: "Hello"
        }
    ]
})

app.directive("myFooter", function() {
    return {
        templateUrl: "footer.html"
    }
    
})

app.directive("myHeader", function() {
    return {
        templateUrl: "header.html"
    }
    
})

