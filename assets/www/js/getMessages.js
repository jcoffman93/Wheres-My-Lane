/* Grabs messages from server as JSON and puts them in ul#wrapper */
$(document).ready(function() {
  //var myScroll=new iScroll("wrapper");
  var loading = document.getElementById("loading");
  loading.style.visibility="visible";
  displayMessages();
  //setInterval(function() {displayMessages()}, 10000);
});

function displayMessages() {
	$.getJSON('http://pacific-badlands-6737.herokuapp.com/messages/mobile.json', function(data) {
  		var items = [];
  		for(i=0; i<data.length; i++) {
  			items.push('<li>' + data[i]["content"] + '<div id=time><sub>' + data[i]["created_at"] + '</sub></div></li>');
  		}
  		htmlstring=items.join('');
      loading.style.visibility="hidden";
  		$('#wrapper').html(htmlstring);
      var myScroll=new iScroll("wrapper");
	});
}
