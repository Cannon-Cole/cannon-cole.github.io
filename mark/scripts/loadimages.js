function loadImages(begin){

    console.log("hello");
    var folder = "/images/watercolorpaintings/";
    var load = 20;
    var loadAmount = 0;
    var total = 0;
    var start = begin * 20;
    var numButtons = 0;

    $.ajax({
        url : folder,
        success: function (data) {

            //removes images
            var myNode = document.getElementById("gridcontainer");
            while (myNode.firstChild) {
                myNode.removeChild(myNode.firstChild);
            }
            //removes buttons
            var myNode = document.getElementById("buttoncontainer");
            while (myNode.firstChild) {
                myNode.removeChild(myNode.firstChild);
            }

            //loads images
            $(data).find("a").attr("href", function (i, val) {
                if( val.match(/\.(jpe?g|JPG|png|gif)$/) ) {
                    start--
                    total++;
                    if(start <= -1){
                        //loads 20 images at a time
                        loadAmount++;
                        if(loadAmount <= load){
                            $(".grid-container").append( "<div class='grid-img'> <img src='" + val +"'></div>");
                        }} 
                }});

            //creates buttons
            if(total % 20 == 0)
            {
                numButtons = total / 20;
            }
            else
            {
                numButtons = total / 20 + 1;
            }

            for(var i = 1; i < numButtons; i++)
            {
                $(".imagebutton-holder").append("<button onclick='loadImages(" + (i - 1) + ")'>" + i + "</button>");
            }
        }
    });
}