import { WEATHERUPDATE } from "../../types/weather";

const initailState = {
        base: "stations",
        clouds: {all: 20},
        cod: 200,
        coord:{
        lat: 51.5074,
        lon: -0.1278
        },
        dt: 1647776765,
        id: 2643743,
        main:{
        feels_like: 8.6,
        humidity: 54,
        pressure: 1027,
        temp: 10.12,
        temp_max: 12.07,
        temp_min: 8.51
        },
        name: "London",
        sys:{
        country: "GB",
        id: 268730,
        sunrise: 1647756215,
        sunset: 1647799947,
        type: 2
        },
        timezone: 0,
        visibility: 10000,
        weather: [{id: 801, main: 'Clouds', description: 'few clouds', icon: '02d'}],
        wind:{
        deg: 70,
        speed: 2.57
        }
    
}

export const weatherReducer = (state = initailState, action) => {
	switch (action.type) {
        case WEATHERUPDATE:
            return Object.assign({}, state, action.weather)

		default:
			return state;
	}
}
