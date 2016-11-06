'use strict';

/**
 * @ngdoc function
 * @name providerApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the providerApp
 */
angular.module('providerApp')
  .controller('LoginCtrl', function ($scope,userService,$location) {

    $scope.email="";
    $scope.password="";


    $scope.login=function(){
      userService.login($scope.email,$scope.password);
    }

    $scope.$on("userLogedIn",function(){
      $location.path("/");
    });




  });
