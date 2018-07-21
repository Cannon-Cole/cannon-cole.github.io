var weatherRequest = new XMLHttpRequest;

weatherRequest.open("GET", "https://api.openweathermap.org/data/2.5/weather?id=4156210&units=imperial&APPID=0e08266a16752f6b3e85f662e36178a6", true);

weatherRequest.send();

weatherRequest.onload = function()
{
    var weatherData = JSON.parse(weatherRequest.responseText);

    console.log(weatherData);
    document.getElementById("current-temp").innerHTML = weatherData.main.temp;
}