/* 
	Logic for landing page, which is only visible before user enters email. If
	user has entered email, server should have returned remember token. index.html will not 
	redirect to landing_page.html if a token is detected.
*/
function changeToSignup() {
	window.location="signup.html";
}