function loadImages(begin){

    var folder = "images/watercolorpaintings";
    var load = 20;
    var counter = 0;
    var start = begin * 20;
    var numbuttons = 0;

    $.ajax({
        url : folder,
        success: function (data) {

            $(data).find("a").attr("href", function (i, val) {
                if( val.match(/\.(jpe?g|JPG|png|gif)$/) ) {
                    //loads 20 images at a time
                    counter++;
                    if(counter < load && counter <= start){
                        $(".grid-container").append( "<div class='grid-img'> <img src='" + val +"'></div>" + counter);
                    } 
                }});
            
            //creates buttons
            if(counter % 20 == 0)
            {
                numbuttons = counter / 20;
            }
            else
            {
                numbuttons = counter / 20 + 1;
            }

            for(var i = 1; i < numbuttons; i++)
            {
                $(".imagebutton-holder").append("<button onclick='loadImages(" + (i - 1) + ")'>" + i + "</button>");
            }
        }
    });
}