var config = {
    apiKey: "AIzaSyBqBwcbgPtCWgw0cLSO0w82j_Jxj4wg_9c",
    authDomain: "schproject-111.firebaseapp.com",
    databaseURL: "https://schproject-111.firebaseio.com",
    projectId: "schproject-111",
    storageBucket: "schproject-111.appspot.com",
    messagingSenderId: "898089358318"
};
firebase.initializeApp(config);

var messagesRef;

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var Driver = document.getElementById("driver").value;
    var CollegeBusNo = document.getElementById("CBusNo").value;
    var BusNo = document.getElementById("BusNo").value;
    var status = "waiting";
    // var LatLng = [latitude,longitude];
    var latitude = 26.8219517;
    var longitude = 75.8687417;
    // Save message
    saveMessage(Driver,CollegeBusNo,BusNo,status,latitude,longitude);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
        // firebase.auth().signOut();
    }, 3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Save message to firebase
function saveMessage(Driver,CollegeBusNo,BusNo,status,latitude,longitude) {

    firebase.database().ref('Bus/'+'bus_no'+CollegeBusNo).set({
        status: status,
        // latitude: latitude,
        driverName:Driver,
        // longitude:longitude,
        CollegeBusNo:CollegeBusNo,
        BusNo:BusNo
    });
    firebase.database().ref('Bus/'+'bus_no'+CollegeBusNo+'/LatLng').set({
        latitude: latitude,
        longitude:longitude
    });
    firebase.database().ref('Bus/'+'bus_no'+CollegeBusNo+'/loc').set({
        lat:latitude,
        lng:longitude
    });

}