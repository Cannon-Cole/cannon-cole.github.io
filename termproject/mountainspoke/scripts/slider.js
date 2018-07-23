$(document).ready(function() {

    var which = 1;
    var transitionSpeed = 100;

    $("#left").click(function() {

        $("#left").attr("id", "leftfrozen");
        $("#right").attr("id", "rightfrozen");

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

        $("#right").attr("id", "rightfrozen");
        $("#left").attr("id", "leftfrozen");

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