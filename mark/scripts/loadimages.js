function textChange()
{
    var allimg = $(".grid-img").toArray();

    for(var i = 0; i <= allimg.length - 1; i++)
    {
        if(allimg[i].firstChild.nextSibling.width < allimg[i].firstChild.nextSibling.height)
        {
            var size = allimg[i].firstChild.nextSibling.width/7.5;

            allimg[i].lastChild.style.fontSize = size + "px";
        }
        else
        {
            var size = allimg[i].firstChild.nextSibling.height/7.5;

            allimg[i].lastChild.style.fontSize = size + "px";
        }


    }
}

function loadImages(begin, folder){

    var load = 20;
    var loadAmount = 0;
    var total = 0;
    var start = begin * 20;
    var numButtons = 0;
    var available = "";

    //gets list of images from directory
    $.ajax({
        url : folder,
        success: function (data) {
            //removes all images
            var myNode = document.getElementById("gridcontainer");
            while (myNode.firstChild) {
                myNode.removeChild(myNode.firstChild);
            }

            //removes all buttons
            var myNode = document.getElementById("buttoncontainer");
            while (myNode.firstChild) {
                myNode.removeChild(myNode.firstChild);
            }
            //image loader
            $(data).find("a").attr("href", function (i, val) {
                if( val.match(/\.(jpe?g|JPG|png|gif)$/) ) {
                    start--
                    total++;
                    if(start <= -1){
                        //loads 20 images at a time
                        loadAmount++;
                        if(loadAmount <= load){
                            var hover = val.split("-");
                            if(hover[2] == "true")
                            {
                                available = "Available";
                            }
                            else
                            {
                                available = "Sold";
                            }

                            hover[3] = hover[3].split(".")[0];

                            $(".grid-container").append( "<div class='grid-img'> <img src='" + val +"'> <div class='overlay' onclick='createLightbox(\"-"+ hover[3] +"\")'><p>" + available + "</p><p>$" + hover[1] + "</p><p>ID: " + hover[3] + "</p></div></div>");
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
                $(".imagebutton-holder").append("<button onclick='loadImages(" + (i - 1) + "," + "\"" + folder + "\"" + ")'>" + i +"</button>");
            }
            //scrolls to top of page
            document.body.scrollTop = document.documentElement.scrollTop = 0;

            clearTimeout(resizeTimer);
            var resizeTimer = setTimeout(textChange, 1100);
        }
    });


}