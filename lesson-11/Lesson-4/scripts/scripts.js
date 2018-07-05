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

    $('.coreValues').prepend("<li><strong>This is brand new !!</strong></li>")
     $("<li><strong>This is also great !!</strong></li>").prependTo('.coreValues')
    
    var nameVal = $('input[name="nameVal"]');
    
    function fillEmpty(){
        if(nameVal.val() == ''){
            nameVal.val('John Doe');
        }
    }
    
    $('#ReqAQuoteBtn').click(fillEmpty);
})