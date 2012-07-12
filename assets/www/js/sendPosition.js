function sendPosition() {
    document.getElementById("frame2").style.zIndex=10;
    animate(200);
    storage=window.localStorage;
    var numr=storage.getItem("NumReports");
    if(numr>0) {
        var user_input=confirm("Are you sure you want to report this location?");
        if (user_input) {
            navigator.geolocation.getCurrentPosition(send, onError, { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });
            storage.setItem("NumReports", numr-=1);
        }
    }
    if(numr<=0) {
        navigator.geolocation.getCurrentPosition(send, onError, { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });
    }

    function send(position) {
        var date=new Date();
        var time=date.getTime();
        var storage=window.localStorage;
        $.ajax( {
            type: "POST",
            url: "http://electric-galaxy-9820.herokuapp.com/reports/mobile_create.json",
            data: { latitude: position.coords.latitude, 
                    longitude: position.coords.longitude, 
                    timestamp: time, 
                    accuracy: position.coords.accuracy,
                    velocity: position.coords.speed,
                    remember_token: storage.getItem("token"),
                    },
            success: function(response) { 
                alert("Report successful ");
           
           }
        } );
    }

    function onError(error) {
        alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    }
}