const API_KEY = '43cb975522f34364b06145503242703';

async function fetchWeather(location) {
    console.log('User Requested Forecast Weather Location: ', location);

    try {
        const forecastWeatherResponse = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=7&aqi=no&alerts=no`);
        const forecastWeatherData = await forecastWeatherResponse.json();

        console.log(forecastWeatherData);
    } catch (error) {
        console.error('Error fetching forecast weather data: ', error.message);
        alert('Error: Could not fetch forecasted weather data');
        return null;
    }
}


const api = { fetchWeather };

export default api;