import cities from './city.json'
import weathers from './weather.json'

export function getCities() {
    return cities;
}

export function getWeather(cityId) {
    return weathers[cityId];
}
