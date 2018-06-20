/*var weatherRequest = new XMLHttpRequest;

weatherRequest.open("GET", "https://api.openweathermap.org/data/2.5/weather?id=4156210&units=imperial&APPID=0e08266a16752f6b3e85f662e36178a6", true);

weatherRequest.send();

weatherRequest.onload = function()
{
    var weatherData = JSON.parse(weatherRequest.responseText); 

    console.log(weatherData);

}*/

var townRequest = new XMLHttpRequest;

townRequest.open("GET", "https://byui-cit230.github.io/weather/data/towndata.json", true);

townRequest.send();

townRequest.onload = function()
{
    var townData = JSON.parse(townRequest.responseText); 

    console.log(townData);

    /***************************
    load franklin
    ***************************/
    
     document.getElementById("franklin-name").innerHTML = townData.towns["0"].name;
    
    document.getElementById("franklin-motto").innerHTML = townData.towns["0"].motto;

    document.getElementById("franklin-yearfounded").innerHTML = townData.towns["0"].yearFounded;

    document.getElementById("franklin-population").innerHTML = townData.towns["0"].currentPopulation;

    document.getElementById("franklin-annualrainfall").innerHTML = townData.towns["0"].averageRainfall;
    
    /***************************
    load greenville
    ***************************/
    
    document.getElementById("greenville-name").innerHTML = townData.towns["1"].name;
    
    document.getElementById("greenville-motto").innerHTML = townData.towns["1"].motto;

    document.getElementById("greenville-yearfounded").innerHTML = townData.towns["1"].yearFounded;

    document.getElementById("greenville-population").innerHTML = townData.towns["1"].currentPopulation;

    document.getElementById("greenville-annualrainfall").innerHTML = townData.towns["1"].averageRainfall;
    
    /***************************
    load springfield
    ***************************/
    
    document.getElementById("springfield-name").innerHTML = townData.towns["3"].name;
    
    document.getElementById("springfield-motto").innerHTML = townData.towns["3"].motto;

    document.getElementById("springfield-yearfounded").innerHTML = townData.towns["3"].yearFounded;

    document.getElementById("springfield-population").innerHTML = townData.towns["3"].currentPopulation;

    document.getElementById("springfield-annualrainfall").innerHTML = townData.towns["3"].averageRainfall;
}