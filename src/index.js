import api from "./modules/API";

const locationSearch = document.getElementById('location_search');
const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const location = locationSearch.value;
    api.fetchWeather(location);
});