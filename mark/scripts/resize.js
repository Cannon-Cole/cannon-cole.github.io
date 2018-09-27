$(window).resize(function () 
                 {
    clearTimeout(resizeTimer);
    var resizeTimer = setTimeout(textChange, 100);

    function textChange()
    {
        var allimg = $(".grid-img").toArray();

        for(var i = 0; i <= allimg.length; i++)
        {
            if(allimg[i].firstChild.nextSibling.width < allimg[i].firstChild.nextSibling.height)
            {
                var size = allimg[i].firstChild.nextSibling.width/7;

                allimg[i].lastChild.style.fontSize = size + "px";
            }
            else
            {
                var size = allimg[i].firstChild.nextSibling.height/7;

                allimg[i].lastChild.style.fontSize = size + "px";
            }


        }
    }

}
                )