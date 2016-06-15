var myApp = angular.module("myApp",[]);
myApp.controller("myController",[ "$scope", "$http", function ($scope, $http) {
    $http.get("js/data.json").success(function (data) {
        $scope.writer = data;
    });
}]);