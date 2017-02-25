// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDvbdsRZD1706pxYaJdjf4kCbe_5qmHChU",
    authDomain: "fire-efb4c.firebaseapp.com",
    databaseURL: "https://fire-efb4c.firebaseio.com",
    storageBucket: "fire-efb4c.appspot.com",
    messagingSenderId: "680514614172"
  };
  firebase.initializeApp(config);

  const messaging = firebase.messaging();

  messaging.requestPermission()
  .then(function(){
  	console.log("Have permission.");
  	return messaging.getToken();
  })
  .then(function(token){
  	console.log(token);
    $.ajax({    
    type : 'POST',
    //url  : 'server/name-update.php',
    url  : 'http://www.grand-pillar.com/uploads/fire/token.php',
    data : "token="+token,
    success :  function(response){            
      console.log(response);
    }
  });
  })
  .catch(function(){
  	console.log("Error occured.");
  })

  messaging.onMessage(function(payload){
  	console.log('onMessage: ', payload);
  })
