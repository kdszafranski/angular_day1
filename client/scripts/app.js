var myApp = angular.module('myApp', []);

myApp.controller("welcomeController",['$scope', '$http', function($scope, $http) {
    // forward declaration
    $scope.note = {};
    $scope.nameArray = [];

    //POST, argument supplied by ng-click on button element
    $scope.clickButton = function(kittyFooFoo){
        $http.post('/people', kittyFooFoo).then(function(response){
            $scope.getPeople();
        });
    };

    //GET
    $scope.getPeople = function(){
        $http.get('/people').then(function(response){
            $scope.nameArray = response.data;
        });
    };

    $scope.getPeople();
}]);