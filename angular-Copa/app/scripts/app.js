'use strict';

/**
 * @ngdoc overview
 * @name copaApp
 * @description
 * # copaApp
 *
 * Main module of the application.
 */
angular
  .module('copa', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch', 
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
 
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });


  });
