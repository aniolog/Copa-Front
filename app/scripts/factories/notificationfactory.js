'use strict';

/**
 * @ngdoc service
 * @name providerApp.notificationFactory
 * @description
 * # notificationFactory
 * Factory in the providerApp.
 */
angular.module('providerApp')
  .factory('notificationFactory', function (Notification) {

    var self=this;
    this.createMessage=function(notificationMessage,notificationTitle,notificationDelay){
      var notificationArg={message:notificationMessage,delay: null};

      if (typeof notificationTitle !== "undefined"){
       notificationArg.title= notificationTitle;
      }
      if(typeof notificationDelay !== "undefined"){
        notificationArg.delay=notificationDelay;
      }
      console.log(notificationDelay);
      return notificationArg;
    }

    return {
      getWarningNotification: function (message,title,delay) {
        var notificationArgs=self.createMessage(message,title,delay);
        Notification.warning(notificationArgs);
      },
      getSuccessNotification:function(message,title,delay){
        var notificationArgs=self.createMessage(message,title,delay);
        Notification.success(notificationArgs);
      },
      getErrorNotification:function(message,title,delay){
        var notificationArgs=self.createMessage(message,title,delay);
        Notification.error(notificationArgs); 
      },
      getPrimaryNotification:function(message,title,delay){
        var notificationArgs=this.createMessage(message,title,delay);
        Notification(notificationArgs); 
      }
    };
  });
