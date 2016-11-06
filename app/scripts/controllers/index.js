'use strict';

/**
 * @ngdoc function
 * @name providerApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the providerApp
 */
angular.module('providerApp')
  .controller('IndexCtrl', function ($scope,userService,websocketService,$location) {
    var self=this;

    $scope.bodyClass='login';

    $scope.restoreBadge=function(){
      alert(0);
      websocketService.setBadge(0);
    }

    $scope.isUserLoggedIn=function(){
      return userService.isUserLoggedIn();
    }

    $scope.getBadge=function(){
      return websocketService.getBadge();
    }

    $scope.$on("userLogedIn",function(){
       $scope.bodyClass="nav-md";
    });

    $scope.$on('$routeChangeStart', function(next, current) { 
      if (!(current.$$route.allowAnonymous)){
        if(!($scope.isUserLoggedIn())){
         $location.path("/login");
        }
      }
     
    });


  });
