var firebaseConfig = {
		apiKey: "AIzaSyDlH7mSBmHfWZVDpf18cL4-QpunbpW4cJA",
    authDomain: "project93-96-cd9f3.firebaseapp.com",
    databaseURL: "https://project93-96-cd9f3-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "project93-96-cd9f3",
    storageBucket: "project93-96-cd9f3.appspot.com",
    messagingSenderId: "815160784273",
    appId: "1:815160784273:web:46f70a4def5747f5675630"
	};

	firebase.initializeApp(firebaseConfig);

  
user_name = localStorage.getitem("user_name");

document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{
      Room_name = document.getElementById("room_name").ariaValueMax;

      firebase.database().ref("/").child(room_name).update({
      });

      localStorage.setitem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setitem("room_name", name);
      window.location = "kwitter_page.html";
}

function lopout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
      }
      