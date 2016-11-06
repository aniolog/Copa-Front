'use strict';

/**
 * @ngdoc service
 * @name providerApp.websocketService
 * @description
 * # websocketService
 * Service in the providerApp.
 */
angular.module('providerApp')
  .service('websocketService', function ($websocket) {

    var self=this;
    this.dataStream ={};
    this.badge=0;
    this.notifications=[];

    this.setBadge=function(badge){
       this.badge=badge;
    }

    this.getBadge=function(){
       return this.badge;
    }
    
    this.connect=function(){

        this.dataStream.onMessage(function(message) {
          console.log(message);
        });
    }





  });
