'use strict';

/**
 * @ngdoc service
 * @name providerApp.routeFactory
 * @description
 * # routeFactory
 * Factory in the providerApp.
 */
angular.module('providerApp')
  .factory('routeFactory', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
