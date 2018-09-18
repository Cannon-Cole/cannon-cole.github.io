function loadDate()
{

    var dateObject = new Date();
    
    var year = dateObject.getFullYear();

    document.getElementById("currentyear").innerHTML = year;

}