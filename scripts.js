
// Initialize Firebase
  // Initialize Firebase
  let config = {
    apiKey: "AIzaSyApR-_V3V_nziMdh8FU2aC_q82QZxP_L74",
    authDomain: "leohrskills.firebaseapp.com",
    databaseURL: "https://leohrskills-default-rtdb.firebaseio.com",
    projectId: "leohrskills",
    storageBucket: "leohrskills.appspot.com",
    messagingSenderId: "326255268034",
  };
  firebase.initializeApp(config);

//Refrence to the database
let database = firebase.database();

//Refrence the items branch of your databse
let resourceRef = firebase.database().ref("resources");

function updateFirebase() {
   
};

//Create a function that will run when the Website is finished loading as well as create a function when the button is clicked. 
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("save").addEventListener('click',function ()
    {
        console.log("it worked!")
        //Config the Model
        var newResource = {
            description: document.getElementById("description").value, //Put the item description here
            qty: document.getElementById("qty").value, //Put the qty of items here 
			maxQty: document.getElementById("qty").value,
            name: document.getElementById("name").value, //Name of the item here
            ownerLocation: document.getElementById("location").value, //Location of owner here
            ownerName: document.getElementById("ownerName").value, //Name of owner here
			borrower: "STILL AVAILABLE", //Name of borrower empty
			checkOut: new Date().toString(),
			checkIn: new Date().toString(),
        };
    
        resourceRef.push(newResource);
		window.location = "index.html"
    }  ); 
});


