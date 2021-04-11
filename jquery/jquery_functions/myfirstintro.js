    // All of my Jquery!!!
    $(document).ready(function() {
            // hide
        $(".button1").click(function() {
            $(".p1").hide();    
        });

            // show
        $(".button2").click(function() {
            $(".p2").show();
        });

            // toggle
        $(".button3").click(function() {
            $(".p3").toggle();
        });

            // slide down
        $(".button4").click(function() {
            $(".p4").slideDown("2", function() {
                $(".p4").slideUp("2");
            });
        });

        // slide up
        $(".button5").click(function() {
            $(".p5").slideUp("4", function() {
                $(".p5").slideDown("4");
            });
        });

            // slide toggle
        $(".button6").click(function() {
            $(".p6").slideToggle();
        });

            // fade in
        $(".p7, .p2").hide();
        $(".button7").click(function() {
            $(".p7").fadeIn(1000);
        });

            // fade out
        $(".button8").click(function() {
            $(".p8").fadeOut();
        });

            // append
        $(".button9").click(function() {
            $(".p9").append("<p>How many lines can you create?</p>");
        });

            // add class
        $(".button10").click(function() {
            $(".p10").addClass("redparagraph");
        });

            // before
        $(".button11").click(function() {
            $(".p11").before("<p>Hello!</p>");
        });

            // after
        $(".button12").click(function() {
            $(".p12").after("<p>Bye!</p>");
        });

            // html
        $(".button13").click(function() {
            $(".button13").html("See I Told you!")
        });

            // attr
        $(".button14").click(function() {
            $("img").attr("width", "10");
        });

            // val
        $(".button15").click(function() {
            $("input:text").val("You Win!!!");
        });

            // text
        $(".button16").click(function() {
            $(".p16").text("That tickles!");
        });

            // click
        $(".button17").click(function() {
            alert("We're finally finished! Restart page please!");
        });
        
    });

