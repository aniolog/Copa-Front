'use strict';

/**
 * @ngdoc service
 * @name providerApp.mapFactory
 * @description
 * # mapFactory
 * Factory in the providerApp.
 */
angular.module('providerApp')
  .factory('mapFactory', function () {

    return {
      getMap: function (selectorName,centerLat,centerLong) {
        var mapOptions={
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        if(typeof centerLat !== "undefined"){
          if(typeof centerLat !== "undefined"){
            mapOptions.center=new google.maps.LatLng(centerLat, centerLong);
          }
        }
        return new google.maps.Map(document.getElementById(selectorName), mapOptions);;
      }
    };
  });
