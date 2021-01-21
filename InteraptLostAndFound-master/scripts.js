
// Initialize Firebase
  // Initialize Firebase
  let config = {
    apiKey: "AIzaSyBQjAT7IUTmV6-rbVBj3g12HeCYDLD1AW4",
    authDomain: "gttskills.firebaseapp.com",
    projectId: "gttskills",
    storageBucket: "gttskills.appspot.com",
    messagingSenderId: "858339293867",
    appId: "1:858339293867:web:d7320b7955981e169915ee",
    measurementId: "G-MG55Z2EG0T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
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


