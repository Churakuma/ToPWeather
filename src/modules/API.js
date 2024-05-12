const API_KEY = '43cb975522f34364b06145503242703';

async function fetchWeather(location) {
    console.log('User Requested Forecast Weather Location: ', location);

    try {
        const forecastWeatherResponse = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=7&aqi=no&alerts=no`);
        const forecastWeatherData = await forecastWeatherResponse.json();

        console.log(forecastWeatherData);
        return processData(forecastWeatherData);
    } catch (error) {
        console.error('Error fetching forecast weather data: ', error.message);
        alert('Error: Could not fetch forecasted weather data');
        return null;
    }
}

function processData(data) {
    const currentWeather = data.current;
    const currentLocation = data.location.name;
    const currentLocationRegion = data.location.region;
    const currentLocationCountry = data.location.country;
    const currentConditions = currentWeather.condition.text;
    const currentIcon = currentWeather.condition.icon;
    const currentTempCelsius = currentWeather.temp_c;
    const windKph = currentWeather.wind_kph;
    const windDirection = currentWeather.wind_dir;
    const uvIndex = currentWeather.uv;

    const forecastDays = data.forecast.forecastday.slice(0, 3); // Slice to get forecast for three days

    const forecastData = forecastDays.map(day => ({
        date: day.date,
        conditions: day.day.condition.text,
        conditionsIcon: day.day.condition.icon,
        maxTempCelsius: day.day.maxtemp_c,
        minTempCelsius: day.day.mintemp_c,
        avgTempCelsius: day.day.avgtemp_c,
    }));

    console.log("Current Location:", currentLocation, currentLocationRegion, currentLocationCountry);
    console.log("Current Conditions:", currentConditions);
    console.log("Current Icon:", currentIcon);
    console.log("Current Temperature (Celsius):", currentTempCelsius);
    console.log("Wind Speed (kph):", windKph);
    console.log("Wind Direction:", windDirection);
    console.log("UV Index:", uvIndex);
    console.log("Forecast Data:", forecastData);

    return {
        currentLocation,
        currentLocationRegion,
        currentLocationCountry,
        currentConditions,
        currentIcon,
        currentTempCelsius,
        windKph,
        windDirection,
        uvIndex,
        forecastData
    };
};

const api = { fetchWeather };

export default api;