import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f33a484cf794d08d0148764789aaba32';
// const API_KEY2 = '7de94c6922cde97de8792f71077d0d4e'
// const URL2 = `api.openweathermap.org/data/2.5/weather?q={city name}&appid=${API_KEY2}`
export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}