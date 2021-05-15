var app= angular.module('myApp',[]);
app.controller('myCtrl', function ($scope, $interval){
    $scope.firstName = "Mahesh";
    $scope.lastName = "Dandu";
    $scope.time=new Date().toLocaleTimeString();

    $interval(function () {
      $scope.Time = new Date().toLocaleTimeString();
  }, 1000);
});