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
  })
  .catch(function(){
  	console.log("Error occured.");
  })

  messaging.onMessage(function(payload){
  	console.log('onMessage: ', payload);
  })