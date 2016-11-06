'use strict';

/**
 * @ngdoc service
 * @name providerApp.userService
 * @description
 * # userService
 * Service in the providerApp.
 */
angular.module('providerApp')
  .service('userService', function ($rootScope,notificationFactory,BASEURL,$http) {
    
    var self=this;
    self.user={};

    self.login=function(email,password){
       var data = "grant_type=password&username=" + email+ "&password=" + password;
        console.log(data);
        $http.post(BASEURL+'token/logisticdelegate',
        data, 
        { headers: 
          { 'Content-Type': 'application/x-www-form-urlencoded'}
        })
        .success(function(response){
          $http.defaults.headers.common['Authorization'] =
	         			'Bearer ' + response.access_token;
          console.log(response.access_token);
          //self.getUserData();
          
        }).error(function(response){
          //
        });

      notificationFactory.getSuccessNotification("Carlos Anibal Lozano Perez","Welcome",4000);
      self.user.Email="sfhasiufh";
      $rootScope.$broadcast("userLogedIn");
    }
    
    self.isUserLoggedIn=function(){
      return ('Email' in self.user);
    }
  });
