/* 
	Logic for landing page, which is only visible before user enters email. If
	user has entered email, server should have returned remember token. Redirects
	to index.html if token exists. 
*/
$("#landingpage").ready(function() {
	var storage=window.localStorage;
	if(storage.getItem("token")) {
    	window.location="index.html";
    }
	$("#actionbutton").live("click", function() {
		window.location="signup.html";
	});
});