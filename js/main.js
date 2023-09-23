const apiKey = "00ec8a822c801738ffbaa6ddbf602765";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");

async function checkWeather(city)
{
    const response = await fetch(apiUrl + city+`&appid=${apiKey}`);

    
    if(response.ok)
    {
        var data = await response.json()
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector(".humidity").innerHTML = data.main.humidity+ '%';
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + ' km/h';

    }
    
}


searchBtn.addEventListener("click", () =>{

    checkWeather(searchBox.value);

})

