import { EMPTY_WEATHER_LIST, WEATHER_LIST_UPDATE } from "../../types/weatherList";


const initailState = {
        weatherList: []
}

export const weatherListReducer = (state = initailState, action) => {
	switch (action.type) {
                case WEATHER_LIST_UPDATE:
                        return {
                                ...state,
                                weatherList: [...state.weatherList, action.weather]
                        }
                case EMPTY_WEATHER_LIST:
                        return{
                                ...state,
                                weatherList: []
                        }

		default:
			return state;
	}
}
