/* 
    Sends client's current position to server. Prompts user with confirmation
    'NumReports' times before sending data. Sends data if report accuracy < 100m.
    See W3C Geolocation Specification (http://dev.w3.org/geo/api/spec-source.html) 
    for additional reference.
*/
function sendPosition() {
    document.getElementById("frame2").style.zIndex=10;
    animate(200);
    var watchId=null;
    var storage=window.localStorage;
    var numr=storage.getItem("numReports");
    if(numr>0) {
        var user_input=confirm("Are you sure you want to report this location?");
        if (user_input) {
            watchId=navigator.geolocation.watchPosition(send, onError, { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });
            storage.setItem("numReports", numr-=1);
        }
    }
    if(numr<=0) {
        watchId=navigator.geolocation.watchPosition(send, onError, { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });
    }

    function send(position) {
        if (position.coords.accuracy<=100) {
            var date=new Date();
            var time=date.getTime();
            $.ajax( {
                type: "POST",
                url: "http://pacific-badlands-6737.herokuapp.com/reports/mobile_create.json",
                data: { latitude: position.coords.latitude, 
                    longitude: position.coords.longitude, 
                    timestamp: time, 
                    accuracy: position.coords.accuracy,
                    velocity: position.coords.speed,
                    remember_token: storage.getItem("token"),
                },
                success: function(response) { 
                    alert(response["response"]);           
                }
            } );
            navigator.geolocation.clearWatch(watchId);
        }
    }

    function onError(error) {
        alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    }
}