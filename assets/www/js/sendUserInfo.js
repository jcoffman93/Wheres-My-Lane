/* Sends user's email to server, which returns remember token and NumReports setting. */
$(document).ready(function() {
//     //$("#loading").style.visibility="hidden";
    $("#submit_button").click(function() {
        $.post(
            "http://www.wheresmylane.org/users/mobile_create.json",
            { "email": $("#email").val() },
            function(data) {
                storage=window.localStorage;
                storage.setItem("token", data["token"]);
                storage.setItem("numReports", data["NumReports"]);
                alert("A confirmation email has been sent to the address you provided. Any reports you send will be archived until we receive your confirmation.");
                window.location="index.html";
            }
        );
    });
});