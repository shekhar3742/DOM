const getWeather = () => {
    let cityname = document.getElementById('cityInput').value;
    let apiKey = 'a5f5793632c32fd6a879830db0e0d11d';
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}`;
   
    fetch(apiurl).then(res => res.json()).then(data => {
        const weatherInfo = document.getElementById('show');

        const city  = data.name;
        const description = data.weather[0].description;
        const temp = data.main.temp;
        const humidity= data.main.humidity;
        const windspeed = data.wind.speed;

        weatherInfo.innerHTML = ` <h4> 
         city : ${city} </br>
         description : ${description} </br>
         temp : ${temp} </br>
         humidity: ${humidity} </br>
         windspeed : ${windspeed} </br>
         </h4>
        `;
    }).catch(err => {
        console.error("opps! sorry", err);
        document.getElementById('show').textContent = "City not found ";
    })
    
}
