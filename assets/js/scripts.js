var homeApp = angular.module('homeApp', ['ngRoute']);

homeApp.config(function ($routeProvider){
    $routeProvider
    
    .when('/', {
        templateUrl: '../templates/index.html',
        controller: 'mainCtrl',
        
    })

    .when('/docent',{
        templateUrl: '../templates/docent.html',
        controller: 'docentCtrl',
      
    })

    .when('/student',{
        templateUrl: '../templates/student.html',
        controller: 'studentCtrl',
       
    });

});

homeApp.controller('mainCtrl', ['$scope', '$log', function($scope, $log) {

}]);

homeApp.controller('docentCtrl', ['$scope', '$log', function($scope, $log) {

}]);


homeApp.controller('studentCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.name = "test";

    $scope.student = {
        mail: '',
        paswoord: '',
    };

   $scope.login = function(){

       $http({
           method: "POST",
           url: "/student",
           data: {
               mail: $scope.student.mail,
               paswoord: $scope.student.paswoord
            }
       });

       console.log("test " + $scope.student.mail)
   };

}]);



