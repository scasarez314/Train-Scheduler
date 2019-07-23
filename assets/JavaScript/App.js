//Firebase key?
var firebaseConfig = {
    apiKey: ,
    authDomain: "trian-scheduler.firebaseapp.com",
    databaseURL: "https://trian-scheduler.firebaseio.com",
    projectId: "trian-scheduler",
    storageBucket: "",
    messagingSenderId: "327724163579",
    appId: "1:327724163579:web:773ddaaa40c2577e"
};


//Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Reference firebase database
var database = firebase.database();

//Inital Variables 
var trainName = "";
var trainDestination = "";
var trainFTT = "";
var trainFrequency = "";

$("#add-Train").on("click", function (event) {
    //Prevent the page from refreshing
    event.preventDefault();

    //Get inputs
    trainName = $("#train-input").val().trim();
    trainDestination = $("#destination-input").val().trim();
    trainFTT = $("#ftt-input").val().trim();
    trainFrequency = $("#frequency-input").val().trim();
    //Clear the Inputs 
    $("#train-input").val("");
    $("#destination-input").val("");
    $("#ftt-input").val("");
    $("#frequency-input").val("");
    //Console.log the value to check if they are being captured
    console.log(trainName);
    console.log(trainDestination);
    console.log(trainFTT);
    console.log(trainFrequency);

    //Change what is saved in firebase
    database.ref().set({
        train: trainName,
        destination: trainDestination,
        firsttraintime: trainFTT,
        frequency: trainFrequency


    });
});