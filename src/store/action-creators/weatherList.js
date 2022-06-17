import { fetchAPI } from "../../API/FetchAPI";
import { EMPTY_WEATHER_LIST, WEATHER_LIST_UPDATE } from "../../types/weatherList";

export const emptyWeatherList = () =>{
  return{
    type: EMPTY_WEATHER_LIST
  }
}

export const updateWeatherList = (weather) => {
	return {
		type: WEATHER_LIST_UPDATE,
		weather,
	}
}

export const fetchWeatherListDate = (lat, lon) => (dispatch) =>{
    return fetchAPI.fetchWeatherDate(lat, lon)
      .then(json => {
          dispatch(updateWeatherList(json));
      })
  
 }

 
