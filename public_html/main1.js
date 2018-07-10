var config = {
    apiKey: "AIzaSyBqBwcbgPtCWgw0cLSO0w82j_Jxj4wg_9c",
    authDomain: "schproject-111.firebaseapp.com",
    databaseURL: "https://schproject-111.firebaseio.com",
    projectId: "schproject-111",
    storageBucket: "schproject-111.appspot.com",
    messagingSenderId: "898089358318"
  };
  firebase.initializeApp(config);
  
  
  
  // Reference messages collection
  var messagesRef;
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var messagesRef;// Reference messages collection
    var name = document.getElementById("name").value;
    var rollNO = document.getElementById("RollNo").value;
    var email = document.getElementById("email").value;
    var password=document.getElementById("pass").value;
    var phone = document.getElementById("phone").value;
    var CollegeBusNo = document.getElementById("CBusNo").value;
    var year= document.getElementById("year").value;
    var branch=document.getElementById("branch").value;
  
    // messagesRef = firebase.database().ref('StudentInfo/'+name+'/');

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
                  firebase.auth().signOut();
    });
    // var user = firebase.auth().currentUser;
    // firebase.auth().onAuthStateChanged(function(user) {
    //   if (user) {
       
    //     var id=user.uid;
    //    // newMessageRef.key=id;
    //     console.log(id);
        // function getInputVal(id){
        //     return document.getElementById(id).value;
        //   }
    //   }
    //     });
    
    // Save message
    saveMessage(email, password, name,phone,rollNO, CollegeBusNo,year,branch);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
      firebase.auth().signOut();
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
 
  
  // Save message to firebase
  function saveMessage(email, password, name,phone,rollNO, CollegeBusNo,year,branch){
    var user = firebase.auth().currentUser;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
       
        var id=user.uid;
    firebase.database().ref('StudentsInfo/'+name).set({
        id:id,
      email:email,
      password:password,
      name: name,
      phone:phone,
      rollNO:rollNO,
      CollegeBusNo:CollegeBusNo,
      year:year,
      branch:branch
    });
    firebase.database().ref('User/Student/'+id).set({
      name:name
    });
}
});
 //   console.log(messagesRef.key);
}