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
room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
    } });  }); }
getData();


function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0
    });
    document.getElementById("msg").value = "";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}