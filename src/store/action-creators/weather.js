import { fetchAPI } from "../../API/FetchAPI";
import { FEACHING, WEATHERUPDATE } from "../../types/weather"

export const fetchingWeather = (isFetching) =>{
  return{
    type: FEACHING,
    isFetching
  }
}

export const updateWeather = (weather) => {
	return {
		type: WEATHERUPDATE,
		weather,
	}
}

export const fetchWeatherDate = (lat, lon) => (dispatch) =>{
  dispatch(fetchingWeather(true));
    return fetchAPI.fetchWeatherDate(lat, lon)
      .then(json => {
          dispatch(updateWeather(json));
          dispatch(fetchingWeather(false));
      })
  
 }

 
