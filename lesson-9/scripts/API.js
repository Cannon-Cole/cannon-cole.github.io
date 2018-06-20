var weatherObject = new XMLHttpRequest;

weatherObject.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Salt%20Lake%20City&units=metric&APPID=0e08266a16752f6b3e85f662e36178a6", true);

weatherObject.send();

weatherObject.onload = function()
{
    var weatherInfo = JSON.parse(weatherObject.responseText);   
    console.log(weatherInfo);

    document.getElementById("city").innerHTML = weatherInfo.name;

    document.getElementById("weather").innerHTML = weatherInfo.weather[0].description;

    var temper = weatherInfo.main.temp * 1.8 + 32;

    document.getElementById("temp").innerHTML = temper.toPrecision(2);

    document.getElementById("weather-icon").src = "https://openweathermap.org/img/w/" + weatherInfo.weather[0].icon +".png";
}

var weatherObject2 = new XMLHttpRequest;

weatherObject2.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=0e08266a16752f6b3e85f662e36178a6", true);

weatherObject2.send();

weatherObject2.onload = function()
{
    var weatherInfo2 = JSON.parse(weatherObject2.responseText);   
    console.log(weatherInfo2);

    document.getElementById("city2").innerHTML = weatherInfo2.name;

    document.getElementById("weather2").innerHTML = weatherInfo2.weather[0].description;

    var temper2 = weatherInfo2.main.temp * 1.8 + 32;

    document.getElementById("temp2").innerHTML = temper2.toPrecision(2);

    document.getElementById("weather-icon2").src = "https://openweathermap.org/img/w/" + weatherInfo2.weather[0].icon +".png";
}

var weatherObject3 = new XMLHttpRequest;

weatherObject3.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Tokyo&units=metric&APPID=0e08266a16752f6b3e85f662e36178a6", true);

weatherObject3.send();

weatherObject3.onload = function()
{
    var weatherInfo3 = JSON.parse(weatherObject3.responseText);   
    console.log(weatherInfo3);

    document.getElementById("city3").innerHTML = weatherInfo3.name;

    document.getElementById("weather3").innerHTML = weatherInfo3.weather[0].description;

    var temper3 = weatherInfo3.main.temp * 1.8 + 32;

    document.getElementById("temp3").innerHTML = temper3.toPrecision(2);

    document.getElementById("weather-icon3").src = "https://openweathermap.org/img/w/" + weatherInfo3.weather[0].icon +".png";
}