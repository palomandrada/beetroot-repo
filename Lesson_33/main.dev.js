"use strict";

var API = "03c72cb266d9e5916be3fbd03af22589";
var defaultCity = "Madrid";

function fetchWeather(cityName) {
  var URL = "https://api.openweathermap.org/data/2.5/find?q=".concat(cityName, "&appid=").concat(API, "&units=metric");
  fetch(URL).then(function (res) {
    return res.json();
  }).then(function (response) {
    var weather = response.list[0];
    renderWeatherData(weather);
  });
}

function searchWeather() {
  var cityName = document.querySelector(".city").value || "Paris";
  fetchWeather(defaultCity);
}

function renderWeatherData(data) {
  var temp_wrapper = document.querySelector(".temperature");
  temp_wrapper.textContent = "".concat(Math.round(data.main.temp), "\u2103");
  var name_wrapper = document.querySelector(".cityName");
  name_wrapper.textContent = "".concat(data.name);
  var iconCode = data.weather[0].icon;
  var iconUrl = "https://openweathermap.org/img/wn/".concat(iconCode, "@2x.png");
  document.getElementById("weather-icon").src = iconUrl;
} ///---------------------------------------------------------------------------------
// const API = "03c72cb266d9e5916be3fbd03af22589"
// const URL = "http://api.openweathermap.org/data/2.5/weather?units?=metric&q=";
// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");
// async function checkWeather (city) {
//     const response = await fetch(URL + city + `&appid=${API}`);
//     var data = await response.json();
//     console.log (data);
//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".temp").innerHTML = Math.round(main.data.temp) + "°C";
// }
// searchBtn.addEventListener("click", ()=> {
//     checkWeather(searchBox.value);
// })
// checkWeather ();