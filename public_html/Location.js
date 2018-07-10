var config = {
    apiKey: "AIzaSyBqBwcbgPtCWgw0cLSO0w82j_Jxj4wg_9c",
    authDomain: "schproject-111.firebaseapp.com",
    databaseURL: "https://schproject-111.firebaseio.com",
    projectId: "schproject-111",
    storageBucket: "schproject-111.appspot.com",
    messagingSenderId: "898089358318"
};
firebase.initializeApp(config);



function initMap() {
    
   
    
     var flag = 0;
    var ref = firebase.database().ref('Bus/')
    // if(ref=='running'){
    ref.on('value', gotData, errData);

    var map

    var markers = [];

    function gotData(data) {
        var ab = [];
        var name = [];
        var busno = [];
        var statuss = [];
        // var lat;
        // var lng;
        var bus = data.val();
        var keys = Object.keys(bus);
        // console.log(keys.length);
//        var infowindow = new google.maps.InfoWindow();

        var marker, i;
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            // console.log(k);
            var ref = firebase.database().ref('Bus/' + k + '/status');

            var reff = firebase.database().ref('Bus/' + k + '/loc');
            var refBusNo = firebase.database().ref('Bus/' + k + '/CollegeBusNo');
            var refName = firebase.database().ref('Bus/' + k + '/driverName');
            // console.log(reff);
            ref.on("value", function (snapshot) {

                statuss.push(snapshot.val());
                console.log(statuss);
                
                if (snapshot.val() == 'running') {
                    
                     flag = 1;
                    refBusNo.on('value', function (snapshot) {
                        name.push(snapshot.val());
                        console.log(busno);
                    });
                    refName.on('value', function (snapshot) {
                        busno.push(snapshot.val());
                        console.log(name);
                        // lng = snapshot.val();
                    });
                    reff.on("value", function (snapshot) {
                        ab.push(snapshot.val());
                        console.log(ab.length);
                        // var lat=snapshot.val();
                        map = new google.maps.Map(document.getElementById('map'), {
                            zoom: 12,
                            center: {
                                lat: 26.8219571,
                                lng: 75.8687417
                            }
                        });
                        for (var i = 0; i < ab.length; i++) {
//                             demo();
                            addMarkerWithTimeout(ab[i], name[i], busno[i]);
                            console.log(name[i]);
                            console.log(busno[i]);
//                            console.log(i*200);
                        }

                        // var image = 'https://imagizer.imageshack.com/v2/100x75q90/923/8KeDLH.png';

                        var icon = {
                            url: 'Bus.png',
                            size: new google.maps.Size(71, 71),
                            origin: new google.maps.Point(0, 0),
                            anchor: new google.maps.Point(17, 34),
                            scaledSize: new google.maps.Size(25, 25)
                        };

                        function addMarkerWithTimeout(position, name, busNo) {
                            window.setTimeout(function () {
                                markers.push(new google.maps.Marker({
                                    position: position,
                                    map: map,
                                     animation: google.maps.Animation.DROP,
                                    icon: icon,
                                    title: ' BusNo: ' + name + '\n' + ' Driver: ' + busNo
                                }));
                            });
                        }
                        // console.log(snapshot.val());
                    }, function (error) {
                        console.log("Error: " + error.code);
                    });
                }
                if(flag==0){
                     var uluru = {
                                lat: 26.8219517,
                                lng: 75.8687417
                            };
                            var map = new google.maps.Map(document.getElementById('map'), {
                                zoom: 12,
                                center: uluru
                            });
                            for (var i = 0; i < markers.length; i++) {
                                markers[i].setMap(null);
                            }
                            markers = [];
                }

            }, function (error) {
                console.log("Error: " + error.code);
            });
        }
    }

    function errData(err) {
        console.log(err);
    }
//  function sleep (time) {
//  return new Promise((resolve) => setTimeout(resolve, time));
//}
//async function demo() {
//  console.log('Taking a break...');
//  await sleep(30000);
//  console.log('30 second later');
//}

}