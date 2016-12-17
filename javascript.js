/*glozl $*/

$(document).ready(function () {
    // Write all your jquery below!!!
    // alert("words");
    
    $('#genderShow').hide();
      $('#religionShow').hide();
    
    $("#submit-name").click(function() {
        var Name = $("#name").val();
             $("#greeting").append( "Hi "+ Name + "!" + " We are hear to talk to you about these issues that concerns us");
    $('#genderShow').hide();
    });
    
    $("#genderyes").click(function() {
        $("body").append("<img src='http://www.sharegif.com/wp-content/uploads/2013/10/yes-gif-9.gif' alt='gender yes!!' />" );
            
    });
    
    
    $("#gender").click(function() {
        $('#intro').hide();
        $("#genderShow").show();
        
        var button = 50;
        $("#genderno").hover(function() {
            $("#genderno").css ("top" , button +"px");
            button = button +50;
        });
        
    });
    
     
     
     $("#religionyes").click(function() {
        $("body").append("<img src='http://www.sharegif.com/wp-content/uploads/2013/10/yes-gif-9.gif' alt='gender yes!!' />" );
    });
    $("#religion").click(function() {
        $('#intro').hide();
        $("#religionShow").show();
        
        var button = 50;
        $("#religionno").hover(function() {
            $("#religionno").css ("top" , button +"px");
            button = button +50;
        });
        
    });
 
    // remember that you might want to hide content first!
    $("#submit-name").click (function() {
        var Name = $("#name").val();
        
        
        
    });
    
    $("#raceshow").hide();
    $("#race").click(function() {
        $('#intro').hide();
        $("#raceshow").show();
 
        $("#raceyes").click(function() {  
            $("body").append("<img src='https://cdn.meme.am/cache/instances/folder37/63758037.jpg' />" );
            
        });
         $("#raceno").click(function() {  
            $("body").append("<img src='http://m.memegen.com/vy6e2y.jpg'/>" );
            
        });
    });



});  









