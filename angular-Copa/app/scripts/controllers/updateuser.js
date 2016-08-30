'use strict';

/**
 * @ngdoc function
 * @name copaApp.controller:UpdateuserctrlCtrl
 * @description
 * # UpdateuserctrlCtrl
 * Controller of the copaApp
 */
angular.module('copa')
  .controller('UpdateuserctrlCtrl', ['$scope','$mdDialog','$rootScope',Ctrl]);

function Ctrl($scope,$mdDialog,$rootScope){
  $scope.user={};
  $scope.user.LastName="Lozano";
  $scope.user.Name="Anibal";
  $scope.user.Password="";
  $scope.user.Email="aniolog@gmail.com";

  $scope.Save=function(){
    //Call user service
    $rootScope.$broadcast('userupdatedialogClose');
  }
  $scope.Cancel=function(){
    //Call user service
    $rootScope.$broadcast('userupdatedialogClose');
  }


}