/* Displays frame 2 of button animation for 'a' miliseconds */
function animate(a) {
	setTimeout("wait()", a);
}

function wait() {
	document.getElementById("frame2").style.zIndex=0;
}