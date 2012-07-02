function getLocation() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError, { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }); 
    var watchId = navigator.geolocation.watchPosition(onSuccess, onError, { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });
		// onSuccess Geolocation
    	//
    function onSuccess(position) {
    	if (position.coords.accuracy < 100) {
    		navigator.geolocation.clearWatch(watchId);
    		//sendPosition(position);
    	}
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    }
}