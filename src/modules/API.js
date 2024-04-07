const api = () => {
    const API_KEY = '43cb975522f34364b06145503242703'

    async function fetchCurrentWeather(location, API_KEY) {
        console.log('User Requested Location: ', location);

        try {
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`);
            const currentWeatherData = await response.json();

            console.log(currentWeatherData);
        } catch (error) {
            console.error('Error fetching current weather data: ', error.message);
            alert('Error: Could not fetch current weather data');
        };
    };
};

export default api;