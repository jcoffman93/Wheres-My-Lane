function sendPosition() {
    navigator.geolocation.getCurrentPosition(send, onError, { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });

    function send(position) {
        var date=new Date();
        var time=date.getTime();
        $.ajax( {
            type: "POST",
            url: "http://electric-galaxy-9820.herokuapp.com/reports",
            data: { latitude: position.coords.latitude, longitude: position.coords.longitude, timestamp: time },
            success: function() { 
                alert("Report successful "+position.coords.accuracy); 
            }
        } );
    }

    function onError(error) {
        alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    }
}