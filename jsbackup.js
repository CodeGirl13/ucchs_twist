/*global $*/

$(document).ready(function () {
    // Write all your jquery below!!!
    $("#genderShow").hide();
    
    $("#gender").click(function() {
        $('#intro').hide();
        $("#genderShow").show();
    });
    
     $("#religion").click(function() {
            $('*').hide();
     });
     
    $("#race").click(function() {
            $('*').hide();
     });
     
     
    $("#immigration").click(function() {
            $('*').hide();
     });
 
    // remember that you might want to hide content first!
    $("#submit-name").click (function() {
        var Name = $("#name").val();
        
        $("#greeting").html( "Hi "+ Name  + "!" + " We are hear to talk to you about these issues that concerns us. Are you ready to take a quiz on these issues?");
        
    });
});
