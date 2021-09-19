const firebaseConfig = {

      apiKey: "AIzaSyCtvgzPl798iEU_oFE3Sm6kLhxO7mSP-WI",
    
      authDomain: "windows11-de001.firebaseapp.com",
    
      databaseURL: "https://windows11-de001-default-rtdb.firebaseio.com",
    
      projectId: "windows11-de001",
    
      storageBucket: "windows11-de001.appspot.com",
    
      messagingSenderId: "1024692134887",
    
      appId: "1:1024692134887:web:42af29a6f45cf93b29d342",
    
      measurementId: "G-2VEN8LM60Z"
    
    };

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
