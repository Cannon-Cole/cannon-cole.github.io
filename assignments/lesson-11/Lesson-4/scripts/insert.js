$(function () {
    
    var box1 = $('.box1');
    var box2 = $('.box2');
    
    function LeftToRight(){
        if(box2.html() == ''){
            box2.html(box1.html());
            box1.html('');
        }
    }
    
    $('#LeftToRight').click(LeftToRight);
    
     function RightToLeft(){
        if(box1.html() == ''){
            box1.html(box2.html());
            box2.html('');
        }
    }
    
    $('#RightToLeft').click(RightToLeft);

})