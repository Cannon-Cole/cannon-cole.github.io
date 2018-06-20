var weatherRequest = new XMLHttpRequest;

weatherRequest.open("GET", "https://api.openweathermap.org/data/2.5/weather?id=4156210&units=imperial&APPID=0e08266a16752f6b3e85f662e36178a6", true);

weatherRequest.send();

weatherRequest.onload = function()
{
    var weatherData = JSON.parse(weatherRequest.responseText); 

    console.log(weatherData);

    document.getElementById("weatherdescription").innerHTML = weatherData.weather["0"].description;

    document.getElementById("icon").src = "https://openweathermap.org/img/w/" + weatherData.weather[0].icon +".png";

    document.getElementById("temperature").innerHTML = weatherData.main.temp;

    document.getElementById("high").innerHTML = weatherData.main.temp_max;

    document.getElementById("low").innerHTML = weatherData.main.temp_min;

    document.getElementById("wind-speed").innerHTML = weatherData.wind.speed
}