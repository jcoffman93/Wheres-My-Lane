watchId = null;
function getLocation() {    
    navigator.geolocation.getCurrentPosition(onSuccess, onError, { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }); 
    watchId = navigator.geolocation.watchPosition(onSuccess, onError, { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });
    document.addEventListener("pause", onPause(), false);
    document.addEventListener("resume", onResume(), false);
}
        
function onPause() {
    if (watchId) {
        navigator.geolocation.clearWatch(watchId);
            watchId = null;
        }
}
    
function onResume() {   
    var watchId = navigator.geolocation.watchPosition(onSuccess, onError, { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });
}
    
        
// onSuccess Geolocation
function onSuccess(position) {
    var element=document.getElementById("accuracy");
    element.innerHTML="Accuracy: "+position.coords.accuracy+"m";            
}

// onError Callback receives a PositionError object
function onError(error) {
    alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
}