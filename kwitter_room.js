var firebaseConfig = {
      apiKey: "AIzaSyBx-sdLkn13_NSc4mBm4i_73UMvNg9LYaQ",
      authDomain: "kwitter-297bc.firebaseapp.com",
      databaseURL: "https://kwitter-297bc-default-rtdb.firebaseio.com",
      projectId: "kwitter-297bc",
      storageBucket: "kwitter-297bc.appspot.com",
      messagingSenderId: "659040800060",
      appId: "1:659040800060:web:5b657d4567e22167f06239"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on("value",function(snapshot){document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot){childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("room_name "+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });
      });
}

getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}