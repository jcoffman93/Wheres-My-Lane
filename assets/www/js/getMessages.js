function getMessages() {
	setInterval(function() {displayMessages()}, 5000);
}

function displayMessages() {
	$.getJSON('http://electric-galaxy-9820.herokuapp.com/messages.json', function(data) {
  		var items = [];
  		for(i=0; i<data.length; i++) {
  			items.push('<li>' + data[i]["content"] + '<div id=time><sub>' + data[i]["created_at"] + '</sub></div></li>');
  		}
  		htmlstring=items.join('');
  		$('#messages').html(htmlstring);
	});
}
