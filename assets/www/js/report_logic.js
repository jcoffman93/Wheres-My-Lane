/* Report logic. Displays various disclaimers */
$("#reportpage").ready(function() {
    document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
    var storage=window.localStorage;
    if(!storage.getItem("token")) {
        window.location="landing_page.html";
    }
    else {
        if(!storage.getItem("show_warning")){
            alert("Please come to a complete stop before using this app. Any reports you send will be ignored if they are sent while you are moving. We are not responsible for any injuries incurred as a result of using this app.");
            storage.setItem("show_warning", true);
        }
        if(!storage.getItem("help_reportpage")){
            alert("Press the shiny red 'Report' button whenever you see a vehicle parked in a bike lane.");
            storage.setItem("help_reportpage");
        }
    }
});