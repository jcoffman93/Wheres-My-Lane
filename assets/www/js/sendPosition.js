function sendPosition() {
    navigator.geolocation.getCurrentPosition(send, onError, { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });

    function send(position) {
        var date=new Date();
        var time=date.getTime();
        var storage=window.localStorage;
        $.ajax( {
            type: "POST",
            url: "http://electric-galaxy-9820.herokuapp.com/reports.json",
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