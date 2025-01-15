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

const API = "03c72cb266d9e5916be3fbd03af22589"
const URL = "http://api.openweathermap.org/data/2.5/weather?units?=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather (city) {
    const response = await fetch(URL + city + `&appid=${API}`);
    var data = await response.json();

    console.log (data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(main.data.temp) + "°C";

}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})

checkWeather ();

