function createLightbox(id)
{
    $(".grid-container").append("<div class='lightbox'><img src='/images/large/"+ id +".jpg'><button onclick='destroyLightbox()'></button></div>");
}

function destroyLightbox()
{
    $(".lightbox").remove();
}