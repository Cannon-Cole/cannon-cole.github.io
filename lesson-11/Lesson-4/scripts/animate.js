$(function () {

    $('.navigation > li').hover(function(){

        $(this).addClass('openSesame').delay();

    }, function(){
        
        $(this).removeClass('openSesame');
        
    });

})