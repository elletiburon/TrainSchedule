var config = {
    apiKey: "AIzaSyAmXO0KIQ_nK0R8fVl7Zqf7iy2cltU54Vo",
    authDomain: "fir-practice-cd047.firebaseapp.com",
    databaseURL: "https://fir-practice-cd047.firebaseio.com",
    projectId: "fir-practice-cd047",
    storageBucket: "fir-practice-cd047.appspot.com",
    messagingSenderId: "832059146415"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $("#submit-btn").on("click", function (event){
    event.preventDefault()

    var name = $("#train-name").val().trim();
    var destination = $("#destination").val().trim();
    var time = $("#train-time").val().trim();
    var frequency = $("#frequency").val().trim();
    // var now = moment();
    // var arrivalFormat: ;
    // var nextArrival: ;
    // var minutesAway: ;
  
    var push = database.ref().push();
    push.set({
        name: name,
        destination: destination,
        time: time,
        frequency: frequency,
        next_arrival: nextArrival,
        minutes_away: minutesAway,
    });

    $("#train-name").val("");
    $("#destination").val("");
    $("#train-time").val("");
    $("#frequency").val("");

  });
    
  database.ref().on("child_added", function(childSnapshot){
    var data = childSnapshot.val();
    var tbody = $('tbody');
    var tRow = $("<tr>");
    var nameCell = $('<td>').text(data.name);
    var destinationCell = $('<td>').text(data.destination);
    var timeCell = $('<td>').text(data.time);
    var frequencyCell = $('<td>').text(data.frequency);
    var arrivalCell = $('<td>').text(data.next_arrival);
    var minutesAwayCell = $('<td>').text(data.minutes_away);

    

    tRow.append(nameCell, destinationCell, timeCell, frequencyCell, arrivalCell, minutesAwayCell);
    tbody.append(tRow);

    
    
});
