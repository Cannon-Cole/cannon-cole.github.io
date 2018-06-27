var high = document.getElementById("high").innerHTML;
var low = document.getElementById("low").innerHTML;
var windSpeed = document.getElementById("wind-speed").innerHTML;

var averageTemp = (high+low)/2;
windSpeed = Math.pow(windSpeed,0.16);

console.log(high);

var windChill = 35.74 + (0.6215 * averageTemp) - 35.75 * windSpeed + 0.4275 * averageTemp * windSpeed;

var windChill = windChill.toFixed(2);


document.getElementById("wind-chill").innerHTML = windChill;