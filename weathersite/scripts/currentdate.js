function loadDate()
{

    var dateObject = new Date();

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var monthDisplay = dateObject.getMonth();
    var dayDisplay = dateObject.getDate();
    var yearDisplay = dateObject.getFullYear();

    var dateOutput = days[dateObject.getDay()] + ", " + dayDisplay + " " + months[monthDisplay] + " " + yearDisplay;

    document.getElementById("currentdate").innerHTML = dateOutput;

}