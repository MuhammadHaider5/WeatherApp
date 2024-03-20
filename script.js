const apikey = "d91a325bf94ce3e41ccadf4fcbb02006";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");
async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    if (data.weather[0].main == "Clouds") {
        weathericon.src="images/cloudy.png";
    }
    else if (data.weather[0].main == "Clear") {
        weathericon.src="images/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
        weathericon.src="images/rainy.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weathericon.src="images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        weathericon.src="images/cloud.png";
    }
    else if (data.weather[0].main == "Snow") {
        weathericon.src="images/rainy.png";
    }
    document.querySelector(".weather").style.display = "block";
}
searchbtn.addEventListener("click", ()=>{
    checkweather(searchbox.value);
});
