$(document).ready(function(){

    $(".img1").hover(function(){
        $(this).fadeOut(function() {
            $(".img1"); $(this).fadeIn(function() {
                $(".img2");
            });
        });
    }); 
        


        


$("p").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "pink");
  });


});
