var display = document.querySelector("#response-container")

function myFunction(){
    var searchCity = document.getElementById("searchCity").value;
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=ecb4a25cd68dda251279e508394c9cca`)
    .then(function(weatherResponse) {
        return weatherResponse.json();
    })
    .then(function(weatherResponse){

        var cityName = weatherResponse.name

        var header = document.querySelector("#response-header")

        header.innerHTML = "<h2>"+cityName+"</h2>"

        var temp = Number(Math.round(((weatherResponse.main.temp -273.15)*9/5)+32))+" F"
        var humidity = weatherResponse.main.humidity+" %"
        var wind = weatherResponse.wind.speed+" MPH"
        var lat = weatherResponse.coord.lat
        var lon = weatherResponse.coord.lon

        display.innerHTML = "<div>Temperature: "+temp+"</div>" + "<div>Humidity: "+humidity+"</div><div>Wind Speed: "+wind+"</div>"

        return fetch (`https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=ecb4a25cd68dda251279e508394c9cca`)
        .then(function(forecastResponse) {
            return forecastResponse.json();
        })
        .then(function(forecastResponse){
            
        var temp1 = Number(Math.round(((forecastResponse.list[4].main.temp -273.15)*9/5)+32))+" F"
        var temp2 = Number(Math.round(((forecastResponse.list[12].main.temp -273.15)*9/5)+32))+" F"
        var temp3 = Number(Math.round(((forecastResponse.list[19].main.temp -273.15)*9/5)+32))+" F"
        var temp4 = Number(Math.round(((forecastResponse.list[26].main.temp -273.15)*9/5)+32))+" F"
        var temp5 = Number(Math.round(((forecastResponse.list[33].main.temp -273.15)*9/5)+32))+" F"
        var humidity1 = (forecastResponse.list[4].main.humidity + "%")
        var humidity2 = (forecastResponse.list[12].main.humidity + "%")
        var humidity3 = (forecastResponse.list[19].main.humidity + "%")
        var humidity4 = (forecastResponse.list[26].main.humidity + "%")
        var humidity5 = (forecastResponse.list[33].main.humidity + "%")

        var forecast = document.querySelector("#forecast-container")

        forecast.innerHTML = "<container><div>"+temp1+" Humidity: "+humidity1+"</div><div>"+temp2+" Humidity: "+humidity2+"</div><div>"+temp3+" Humidity: "+humidity3+"</div><div>"+temp4+" Humidity: "+humidity4+"</div><div>"+temp5+" Humidity: "+humidity5+"</div></container>"

        return fetch (`http://api.openweathermap.org/data/2.5/uvi?appid=ecb4a25cd68dda251279e508394c9cca&lat=${lat}&lon=${lon}`)
        .then(function(uvResponse){
            return uvResponse.json();
        })
        .then(function(uvResponse){
            var uv = uvResponse.value
            var uvIndex = document.querySelector("#uvIndex-container")
            uvIndex.innerHTML = "<div>UV Index: "+uv+"</div"
            console.log(uv)
        })
    })
})}

//link used for weather conditions
// https://openweathermap.org/weather-conditions
// function weatherIcon(weather_variable){
//     weather_variable.toLowerCase();//convert var to lower case
//     if(weather_variable == 'drizzle'){
//         image_path = ;
//     }
//     else if(weather_variable == 'clear'){
//         image_path = ;
//     }
//     else if(weather_variable == 'thunderstorm'){
//         image_path = ;
//     }
//     else if(weather_variable == 'rain'){
//         image_path = ;
//     }
//     else if(weather_variable == 'snow'){
//         image_path = ;
//     }

//     return image_path;
// }
