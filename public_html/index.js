/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function validate() {
    // if (document.getElementById("text1").value == "admin@sch.com" &&
    //     document.getElementById("text2").value == "admin") {
    //     //alert( "validation succeeded" );
    //     location.href = "HomePage.html";
    // } else {
    //     alert("Invalid Email or Password");
    //     location.href = "index.html";
    // }
    var username = document.getElementById("text1").value;
    var passwrd = document.getElementById("text2").value;
    // console.log(username + ' ' + passwrd);
    // window.alert(username + ' ' + passwrd);

    var adminuser = 'admin@sch.com';
    var adminpswd = 'admin';

    if (username == adminuser) {
        if (passwrd == adminpswd) {
            location.href = "HomePage.html";
        } else {
            alert("Invalid Email or Password");
            location.href = "index.html";
        }
    } else {
        alert("Invalid Email or Password");
        location.href = "index.html";
    }
}

function GoAdd() {
    window.location.href = "AddUser.html";
}
//
function moveBack() {
    window.location.href = "HomePage.html";
}
//
//
function logout() {
    //
    // Sign-out successful.
    location.href = "index.html";

}
//
function GoMap() {
    location.href = "Map.html";

}
//
function DriverInfo() {
    location.href = "AddDriverInfo.html";
}
//
function route() {
    location.href = "Map2.html";
}
//
function live() {
    location.href = "Location.html";
}
//// location.href = "Map2.html";
function BusInfo() {
//    //     var ref = firebase.database().ref('Bus/')
//    //     // if(ref=='running'){
//    //    ref.on('value',gotData,errData);
    location.href = "BusInfo.html";
}