$(function () {
    // All jQuery code goes here

    $('#alcoveLogo').css('opacity', 0.4);

    $('.servicesBtn').css('color', '#FFF');

    toggleStyle = function(){

        var inputFields = $('input[type="text"]');

        if(inputFields.css('background-color') === 'rgb(255, 0, 0)'){
            inputFields.css('background-color', 'rgb(255, 255, 255)');
        }
        else
        {
            inputFields.css('background-color', 'rgb(255, 0, 0)');
        }
    }

    $('#ReqAQuoteBtn').click(toggleStyle);

})