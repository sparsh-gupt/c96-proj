//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBw3iQYMpCT0R-uNKeL2oGlpFS69WcZEHA",
      authDomain: "kwittersparsh.firebaseapp.com",
      databaseURL: "https://kwittersparsh-default-rtdb.firebaseio.com",
      projectId: "kwittersparsh",
      storageBucket: "kwittersparsh.appspot.com",
      messagingSenderId: "530716107994",
      appId: "1:530716107994:web:37c029d9d4e0a101f071e3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
email = localStorage.getItem("email");
room_name = localStorage.getItem("room_name");
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function logout() {
      localStorage.removeItem("email");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: email,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}