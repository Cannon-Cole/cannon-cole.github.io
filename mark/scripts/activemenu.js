function wayfinder()
{
    var urlString = document.location.href; 

    var urlArray = urlString.split('/'); 

    var pageHREF = urlArray[urlArray.length - 1]; 

    if (pageHREF != "") 
    { 
        var menu = document.querySelectorAll("nav ul li a");
        
        for (var i = 0; i < menu.length; i++) 
        { 

            var currentURL = 
                menu[i].getAttribute('href');

            menu[i].className = ''; 

            if (currentURL === pageHREF) 
            { 
                menu[i].className = 'active'; 
            }
        } 
    }
}