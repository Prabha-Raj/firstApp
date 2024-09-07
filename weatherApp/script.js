const Api_key = "8b718b4d2935b7625fe3a17cf8ced283";
// Your provided OpenWjeather API Key

function getWeather(){
    const city = document.getElementById('cityInput').value;
    const WeatherDetails=document.getElementById('WeatherDetails');
    if(city===''){
        WeatherDetails.innerHTML='<p> Please enter a city name</p>';
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Api_key}`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        if(data.cod === '404'){
            WeatherDetails.innerHTML = `<p> City Not Found Please try Again </p>`
        }else{
            WeatherDetails.innerHTML = `<h2>${data.name}, ${data.sys.country}</h2>
            <p>Temprature : ${data.main.temp}</p>`
            console.log("weather Data : ",data)
        }
    })
    .catch((err) => {
        WeatherDetails.innerHTML = `<p>Some Exception Ocured! </p>`
    })    


}