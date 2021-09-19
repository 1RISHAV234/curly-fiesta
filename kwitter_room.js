const firebaseConfig = {

      apiKey: "AIzaSyC5WODTsGCbaWJo4Yxz2ZgcZX7JFvlNUB8",
    
      authDomain: "project-demo-ab6dd.firebaseapp.com",
    
      databaseURL: "https://project-demo-ab6dd-default-rtdb.firebaseio.com",
    
      projectId: "project-demo-ab6dd",
    
      storageBucket: "project-demo-ab6dd.appspot.com",
    
      messagingSenderId: "943239946974",
    
      appId: "1:943239946974:web:ceef472003035d2fed984f",
    
      measurementId: "G-HKK13GPNY2"
    
    };
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + " 😊";

function add_room() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding room name"
      });
      localStorage.setItem("room_name",room_name);

}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
                  document.getElementById("output").innerHTML+=row;
            });
      });
}
getData();
function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
function send() {
      msg = document.getElementById("text").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message : msg,
            like: 0
      });
      document.getElementById("text").value="";
}