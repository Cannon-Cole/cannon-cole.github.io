$(document).ready(function() {

    var which = 1;

    $("#left").click(function() {

        $("#bike" + which).fadeOut(350, function() {

            which--;
            if(which < 1)
            {
                which = 3;
            }
                $("#bike" + which).fadeIn(350);
        });
    });

    $("#right").click(function() {

        $("#bike" + which).fadeOut(350, function() {

            which++;
            if(which > 3)
            {
                which = 1;
            }
                $("#bike" + which).fadeIn(350);
        });
    });
});