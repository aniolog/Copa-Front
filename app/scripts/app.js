'use strict';

/**
 * @ngdoc overview
 * @name providerApp
 * @description
 * # providerApp
 *
 * Main module of the application.
 */
angular
  .module('providerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngWebSocket',
    'ui-notification'
  ])
  .config(function ($routeProvider,$httpProvider) {
      $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];

    if ('serviceWorker' in navigator) { 
        navigator.serviceWorker.register('service-worker.js').then(function(registration) {
          console.log('ServiceWorker registration successful with scope: ',    registration.scope);
          registration.pushManager.subscribe({userVisibleOnly: true}).then(function(subscription){ 
          console.log(subscription.endpoint);});
        }).catch(function(err) {
          console.log('ServiceWorker registration failed: ', err);
        });
    }


  
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        allowAnonymous:false
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        allowAnonymous:false
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        allowAnonymous:true
      })
      .when('/dash', {
        templateUrl: 'views/dash.html',
        allowAnonymous:false
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl',
        controllerAs: 'settings'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
      .when('/help', {
        templateUrl: 'views/help.html',
        controller: 'HelpCtrl',
        controllerAs: 'help'
      })
      .otherwise({
        redirectTo: '/login'
      });


  });
