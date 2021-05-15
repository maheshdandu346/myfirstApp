var app= angular.module('myFirstApp',[]);
app.controller('MyFirstController', function ($scope){
    $scope.name="";
    $scope.totalValue = 0;

    $scope.displayNumeric = function(){
        var totalNameValue = calculatNumericForstring($scope.name);
        $scope.totalValue = totalNameValue;
    };

    function calcalculatNumericForstring(string){

        var totalStringValue = 0;

        for(var i=0; i<string.length; i++){
            totalStringValue += string.charCodeAt(i);
        };
    };


});