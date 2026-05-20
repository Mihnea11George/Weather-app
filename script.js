const apiKey = '43771b4ab5425e0857b5632f28b53aa9';
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');


document.addEventListener("DOMContentLoaded", () => {
    fetchWeatherData("Iași");
});

searchBtn.addEventListener('click', () => {
    if (cityInput.value.trim() !== "") {
        fetchWeatherData(cityInput.value);
    }
});

cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && cityInput.value.trim() !== "") {
        fetchWeatherData(cityInput.value);
    }
});

async function fetchWeatherData(city) {
    try {
        
        const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ro`;
        const currentRes = await fetch(currentUrl);
        const currentData = await currentRes.json();

        if (currentData.cod !== 200) throw new Error("Oraș negăsit");

    
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=ro`;
        const forecastRes = await fetch(forecastUrl);
        const forecastData = await forecastRes.json();

        updateCurrentWeather(currentData);
        updateForecast(forecastData);

    } catch (error) {
        alert("Eroare: Nu am putut găsi orașul. Te rugăm să verifici numele!");
    }
}

function updateCurrentWeather(data) {
    document.getElementById('city-name').textContent = `VREME ÎN ${data.name}`;
    document.getElementById('temperature').textContent = Math.round(data.main.temp);
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('humidity').textContent = `${data.main.humidity}%`;
    document.getElementById('wind').textContent = `${Math.round(data.wind.speed * 3.6)} km/h`;
    document.getElementById('pressure').textContent = `${data.main.pressure} hPa`;
    document.getElementById('feels-like').textContent = `${Math.round(data.main.feels_like)}°C`;
    
   
    const iconCode = data.weather[0].icon;
    document.getElementById('w-icon').src = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
}

function updateForecast(data) {
    const forecastContainer = document.getElementById('forecast-container');
    forecastContainer.innerHTML = '';

   
    const dailyForecasts = data.list.filter(item => item.dt_txt.includes('12:00:00'));

    const zile = ['DUM', 'LUN', 'MAR', 'MIE', 'JOI', 'VIN', 'SÂM'];

    dailyForecasts.slice(0, 5).forEach(day => {
        const date = new Date(day.dt * 1000);
        const dayName = zile[date.getDay()];
        const temp = Math.round(day.main.temp);
        const iconCode = day.weather[0].icon;

        const forecastCard = document.createElement('div');
        forecastCard.classList.add('forecast-item');
        
        forecastCard.innerHTML = `
            <p>${dayName}</p>
            <img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="Icon">
            <p>${temp}°C</p>
        `;
        
        forecastContainer.appendChild(forecastCard);
    });
}