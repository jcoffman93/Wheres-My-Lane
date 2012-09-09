/* Sends user's email to server, which returns remember token 
    and NumReports setting. */
$(document).ready(function() {
    
    $("#submit_button").click(function() {
        var loading = document.getElementById("loading");
        loading.style.visibility="visible";
        //$("#loading").style.visibility="visible";
        $.post(
            "http://pacific-badlands-6737.herokuapp.com/users/mobile_create.json",
            { "email": $("#email").val() },
            function(data) {
                storage=window.localStorage;
                if(data["response"]) {
                    alert(data["response"]);
                } else {
                    alert("Server unavailable");
                }
                if(data["token"]) {
                    storage.setItem("token", data["token"]);
                    storage.setItem("numReports", data["NumReports"]);
                    window.location="index.html";
                }
            }
        );
    });
});