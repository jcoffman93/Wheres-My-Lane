/* Renders map on map_page.html. See Google Maps API V3 for complete reference. */

$(document).ready(function() {
  var map;
  function initialize() {

    // Set options for map.
    var myOptions = {
      zoom: 13,
       // Change to current position, otherwise set this as default
      center: new google.maps.LatLng(42.32657009662249, -71.06678009033203),
      disableDefaultUI: true,
      panControl: false,
      zoomControl: false,         
      scaleControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP, 
    };
    map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
    addMarker(42.32657009662249, -70.06678009033203);
    addMarker(41.32657009662249, -71.26678009033203);
    addMarker(42.32657009662249, -71.86678009033203);
    addMarker(42.32657056662249, -71.71678009033203);
    addMarker(42.66657009662249, -71.12678009033203);
    addMarker(42.55657009664949, -71.35678009033203);
    addMarker(42.12657009662249, -71.26678009033203);
    addMarker(42.33657009662249, -71.96678009033203);
    /* Gets reports from server, then adds them to map */
    $.getJSON('http://pacific-badlands-6737.herokuapp.com/reports.json', function(data) {
        for(i=0; i<10 /*data.length*/ ; i++) {
          addMarker(data[i]["latitude"], data[i]["longitude"]);
        }
    });

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
});