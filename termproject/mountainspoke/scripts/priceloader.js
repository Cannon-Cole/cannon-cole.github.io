var priceRequest = new XMLHttpRequest;

priceRequest.open("GET", "data/prices.json", true);

priceRequest.send();

priceRequest.onload = function()
{
    var priceData = JSON.parse(priceRequest.responseText); 

    console.log(priceData);

    var td = document.getElementsByTagName("td");

    for(var i = 1; i < priceData.prices.length + 1; i++)
    {
        console.log(i * 2 - 1);
            td[i * 2 - 1].innerHTML = priceData.prices[i - 1];
    }
}