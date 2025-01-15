"use strict";

// const API = "03c72cb266d9e5916be3fbd03af22589"
// function fetchWeather (cityName) {
//     const URL = `http://api.openweathermap.org/data/2.5/find?q=${cityName}&appid=${API}&units=metric`;
//     fetch (URL)
//     .then (res => res.json())
//     .then (response => {
//         const weather = response.list[0]?.main;
//         renderWeatherData (weather);
//     })
// }
// function searchWeather() {
//     const cityName = document.querySelector(".city").value || "Paris";
//     fetchWeather(cityName + temperature);
// }
// function renderWeatherData(data){
//     const temp_wrapper = document.querySelector(".temperature")
//     temp_wrapper.textContent = `Current temperature: ${Math.round(data.temp)}℃`;
//     const name_wrapper = document.querySelector(".name")
//     name_wrapper = data.name;
// }
var API = "03c72cb266d9e5916be3fbd03af22589";
var URL = "http://api.openweathermap.org/data/2.5/weather?units?=metric&q=";
var searchBox = document.querySelector(".search input");
var searchBtn = document.querySelector(".search button");

function checkWeather(city) {
  var response, data;
  return regeneratorRuntime.async(function checkWeather$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch(URL + city + "&appid=".concat(API)));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          data = _context.sent;
          console.log(data);
          document.querySelector(".city").innerHTML = data.name;
          document.querySelector(".temp").innerHTML = Math.round(main.data.temp) + "°C";

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
}

searchBtn.addEventListener("click", function () {
  checkWeather(searchBox.value);
});
checkWeather();