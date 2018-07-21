$(function () { 
    $('.dropdownMenu > li').hover( function(){

        $(this).children('ul').slideToggle(200);
    })
})