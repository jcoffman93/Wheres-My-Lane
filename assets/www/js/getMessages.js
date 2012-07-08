function getMessages() {
	setInterval(function() {displayMessages()}, 5000);
}

function displayMessages() {
	$.getJSON('http://electric-galaxy-9820.herokuapp.com/messages.json', function(data) {
  		var items = [];
  		for(i=0; i<data.length; i++) {
  			items.push('<tr><td>' + data[i]["content"] + '<div id=time <sub>' + data[i]["created_at"] + '</sub></div></td></tr>');
  		}
  		htmlstring=items.join('');
  		$('table#messages').html(htmlstring);
	});
}
