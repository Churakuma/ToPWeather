import api from "./modules/API";
import './style.css'

const locationSearch = document.getElementById('location_search');
const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const location = locationSearch.value;

    try {
        let apiData = await api.fetchWeather(location);
        displayCurrentWeatherData(apiData);
        displayForecastWeatherData(apiData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
});

function displayCurrentWeatherData(apiData) {
    // Check if any of the location information is undefined
    if (apiData) {
        // Location
        const currentLocationInfo = `${apiData.currentLocation}, ${apiData.currentLocationRegion}, ${apiData.currentLocationCountry}`;
        const paragraph = document.createElement('p');
        paragraph.textContent = currentLocationInfo;

        // Icon
        const currentIconImg = document.createElement('img');
        currentIconImg.src = apiData.currentIcon;
        currentIconImg.alt = 'Weather Icon';

        // Current Temp
        const currentTemp = document.createElement('p');
        currentTemp.textContent = apiData.currentTempCelsius;

        // Condition
        const currentCondition = document.createElement('p');
        currentCondition.textContent = `Currently ${apiData.currentConditions}`;

        // Append data
        const currentWeatherContainer = document.getElementById('current');
        currentWeatherContainer.innerHTML = "";
        currentWeatherContainer.appendChild(paragraph);
        currentWeatherContainer.appendChild(currentIconImg);
        currentWeatherContainer.appendChild(currentTemp);
        currentWeatherContainer.appendChild(currentCondition);

    } else {
        console.error('Current weather data is undefined');
    }
}

function displayForecastWeatherData(apiData) {
    // Check if the location information is undefined
    if (apiData) {
        // Today
        const todayContainer = document.createElement('div');
        const forecastWeatherContainer = document.getElementById('forecast');

        const todayTitle = document.createElement('p');
        todayTitle.textContent = 'Today';

        const todayDate = document.createElement('p');
        todayDate.textContent = `${apiData.forecastData[0].date}`

        const todayConditions = document.createElement('p');
        todayConditions.textContent = `${apiData.forecastData[0].conditions}`

        const todayConditionIcon = document.createElement('img');
        todayConditionIcon.src = apiData.forecastData[0].conditionsIcon;
        todayConditionIcon.alt = 'Weather Icon';

        const todayAvgTemp = document.createElement('p');
        todayAvgTemp.textContent = apiData.forecastData[0].avgTempCelsius;

        const todayMaxTemp = document.createElement('p');
        todayMaxTemp.textContent = apiData.forecastData[0].maxTempCelsius;

        const todayMinTemp = document.createElement('p');
        todayMinTemp.textContent = apiData.forecastData[0].minTempCelsius;

        todayContainer.appendChild(todayTitle);
        todayContainer.appendChild(todayDate);
        todayContainer.appendChild(todayConditions);
        todayContainer.appendChild(todayConditionIcon);
        todayContainer.appendChild(todayAvgTemp);
        todayContainer.appendChild(todayMinTemp);
        todayContainer.appendChild(todayMaxTemp);
        forecastWeatherContainer.appendChild(todayContainer);

        // Tomorrow
        const tomorrowContainer = document.createElement('div');

        const tomorrowTitle = document.createElement('p');
        tomorrowTitle.textContent = 'Tomorrow';

        const tomorrowDate = document.createElement('p');
        tomorrowDate.textContent = `${apiData.forecastData[1].date}`

        const tomorrowConditions = document.createElement('p');
        tomorrowConditions.textContent = `${apiData.forecastData[1].conditions}`

        const tomorrowConditionIcon = document.createElement('img');
        tomorrowConditionIcon.src = apiData.forecastData[1].conditionsIcon;
        tomorrowConditionIcon.alt = 'Weather Icon';

        const tomorrowAvgTemp = document.createElement('p');
        tomorrowAvgTemp.textContent = apiData.forecastData[1].avgTempCelsius;

        const tomorrowMaxTemp = document.createElement('p');
        tomorrowMaxTemp.textContent = apiData.forecastData[1].maxTempCelsius;

        const tomorrowMinTemp = document.createElement('p');
        tomorrowMinTemp.textContent = apiData.forecastData[1].minTempCelsius;

        tomorrowContainer.appendChild(tomorrowDate);
        tomorrowContainer.appendChild(tomorrowConditions);
        tomorrowContainer.appendChild(tomorrowTitle);
        tomorrowContainer.appendChild(tomorrowConditionIcon);
        tomorrowContainer.appendChild(tomorrowAvgTemp);
        tomorrowContainer.appendChild(tomorrowMinTemp);
        tomorrowContainer.appendChild(tomorrowMaxTemp);
        forecastWeatherContainer.appendChild(tomorrowContainer);

        // Day After
        const dayAfterContainer = document.createElement('div');

        const dayAfterTitle = document.createElement('p');
        dayAfterTitle.textContent = 'Day after Tomorrow';

        const dayAfterDate = document.createElement('p');
        dayAfterDate.textContent = `${apiData.forecastData[2].date}`

        const dayAfterConditions = document.createElement('p');
        dayAfterConditions.textContent = `${apiData.forecastData[2].conditions}`

        const dayAfterConditionIcon = document.createElement('img');
        dayAfterConditionIcon.src = apiData.forecastData[2].conditionsIcon;
        dayAfterConditionIcon.alt = 'Weather Icon';

        const dayAfterAvgTemp = document.createElement('p');
        dayAfterAvgTemp.textContent = apiData.forecastData[2].avgTempCelsius;

        const dayAfterMaxTemp = document.createElement('p');
        dayAfterMaxTemp.textContent = apiData.forecastData[2].maxTempCelsius;

        const dayAfterMinTemp = document.createElement('p');
        dayAfterMinTemp.textContent = apiData.forecastData[2].minTempCelsius;

        dayAfterContainer.appendChild(dayAfterDate);
        dayAfterContainer.appendChild(dayAfterConditions);
        dayAfterContainer.appendChild(dayAfterTitle);
        dayAfterContainer.appendChild(dayAfterConditionIcon);
        dayAfterContainer.appendChild(dayAfterAvgTemp);
        dayAfterContainer.appendChild(dayAfterMinTemp);
        dayAfterContainer.appendChild(dayAfterMaxTemp);
        forecastWeatherContainer.appendChild(dayAfterContainer);

    } else {
        console.error('Forecase weather data is undefined');
    }
}