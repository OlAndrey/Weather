import { FEACHING, WEATHERUPDATE } from "../../types/weather";

const initailState = {
        base: "",
        clouds: {all: null},
        main:{
                feels_like: null,
                humidity: null,
                pressure: null,
                temp: null,
                temp_max: null,
                temp_min: null
        },
        visibility: null,
        weather: [{id: null, main: '', description: '', icon: ''}],
        wind:{
                deg: null,
                speed: null
        },
        isFetching: true
    
}

export const weatherReducer = (state = initailState, action) => {
	switch (action.type) {
                case WEATHERUPDATE:
                        return {
                                ...state,
                                ...action.weather
                        }
                case FEACHING:
                        return{
                                ...state,
                                isFetching: action.isFetching
                        }

		default:
			return state;
	}
}
