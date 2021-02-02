
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
            skill: document.getElementById("Skill").value, //Put the Skill name
            
            Discription: document.getElementById("description").value, //Skill discritopn here
        };
    
        resourceRef.push(newResource);
		window.location = "index.html"
    }  ); 
});


