'use strict';

/**
 * @ngdoc function
 * @name copaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the copaApp
 */
angular.module('copa')
  .controller('IndexCtrl', function ($mdSidenav,$scope,$mdDialog) {
     $scope.openMenu = function() {
               $mdSidenav('left').toggle();
             };
    $scope.openUserMenu = function($mdOpenMenu, ev) {
      $mdOpenMenu();
    };
    
  $scope.showAdvanced = function(ev) {
    $mdDialog.show({
      controller:"UpdateuserctrlCtrl",
      templateUrl: 'views/updateuser.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };

  $scope.$on('userupdatedialogClose', function(event, args) {
    $mdDialog.cancel();
    
  });






  });
