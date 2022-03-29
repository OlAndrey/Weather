import { WEATHERUPDATE } from "../../types/weather"


export const updateWeather = (weather) => {
	return {
		type: WEATHERUPDATE,
		weather: weather,
	}
}

export function fetchWeatherDate(city) {
    return function(dispatch) {
      return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=9f34aadc54ee8673083896046d343a8a&units=metric`)
        .then(response => response.json())
        .then(json => {
            dispatch(updateWeather(json));
        })
    };
 }

 
