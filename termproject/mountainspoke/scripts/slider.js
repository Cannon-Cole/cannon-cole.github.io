$(document).ready(function() {

    var which = 1;
    var transitionSpeed = 100;

    $("#left").click(function() {

        $("#bike" + which).fadeOut(transitionSpeed, function() {

            which--;
            if(which < 1)
            {
                which = 3;
            }
            $("#bike" + which).fadeIn(transitionSpeed, function(){

            });
        });
    });

    $("#right").click(function() {

        $("#bike" + which).fadeOut(transitionSpeed, function() {

            which++;
            if(which > 3)
            {
                which = 1;
            }
            $("#bike" + which).fadeIn(transitionSpeed, function(){
            });
        });
    });
});