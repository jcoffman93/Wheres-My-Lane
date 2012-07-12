function sendUserInfo() {
	$.ajax( {
            type: "POST",
            url: "http://electric-galaxy-9820.herokuapp.com/users/mobile_create.json",
            data: { "email": $("#email").val() },
            datatype: "text",
            success: function(data) {
            	storage=window.localStorage;
    			storage.setItem("token", data["token"]);
                storage.setItem("NumReports", data["NumReports"])
    			window.location="index.html"
                alert("A confirmation email has been sent to the address you provided. Any reports you send will be archived until we receive your confirmation.")
           }
    } );
}