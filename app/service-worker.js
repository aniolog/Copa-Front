self.addEventListener('push', function(event) {  
 console.log(event);

  var title,body;   
  var icon = 'https://image.freepik.com/free-icon/auricular-phone-symbol-in-a-circle_318-50200.png';  
  var tag = 'simple-push-demo-notification-tag';
    title="Alerta!";
    body="Se le ha asignado una nueva solicitud de transporte";

  event.waitUntil(  
    self.registration.showNotification(title, {  
      body: body,  
      icon: icon,  
      tag: tag  
    })  
  );  
});