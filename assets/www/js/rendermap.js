/* Renders map on map_page.html. See Google Maps API V3 for complete reference. */
var map;
function initialize() {

  // Set options for map.
  var myOptions = {
    zoom: 13,
     // Change to current position, otherwise set this as default
    center: new google.maps.LatLng(42.32657009662249, -71.06678009033203),
    disableDefaultUI: true,
    panControl: true,
    zoomControl: false,
          
    scaleControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP, 
    panControl: true,
    panControlOptions: {
      position: google.maps.ControlPosition.TOP_RIGHT
    },
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE,
      position: google.maps.ControlPosition.TOP_RIGHT
    }
  };
  map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
  /* Gets reports from server, then adds them to map */
  /*$.getJSON('http://electric-galaxy-9820.herokuapp.com/reports.json', function(data) {
      for(i=0; i<data.length; i++) {
        addMarker(data[i]["latitude"], data[i]["longitude"]);
      }
  });*/

}

function addMarker(lat, long){
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(lat, long),
      map: map,
      title: 'REPORT'
  });
  //DROP PIN
  marker.setAnimation(google.maps.Animation.DROP);
  marker.setTitle('DROP');
  //DROP MARKER INFOWINDOW
  google.maps.event.addListener(marker, 'click', function(){
    infowindow.open(map, this);
    marker = this
  });
  var infowindow = new google.maps.InfoWindow({
    content:"Lat: " + lat + ", Long: " + long
  });
  //CLOSING MARKER INFOWINDOW
  google.maps.event.addListener(infowindow,'closeclick',function(){
    infowindow.close(map, this); //removes the marker
  });
}    
console.log("message")
google.maps.event.addDomListener(window, 'load', initialize);
