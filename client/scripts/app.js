var myApp = angular.module('myApp', []);

myApp.controller("welcomeController",['$scope', function($scope) {
    // forward declaration
    $scope.note = {};
    $scope.nameArray = [];

    $scope.clickButton = function() {
        $scope.nameArray.push($scope.note);

        console.log($scope.nameArray);

        $scope.note = {};
    };
}]);