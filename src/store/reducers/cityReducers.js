import { SELECTCITY } from "../../types/city";

const initailState = {
    name: "London",
    country: "GB",
    state: "England",
    lat: 51.5074,
    lon: -0.1278
}

export const cityReducer = (state = initailState, action) => {
	switch (action.type) {

        case SELECTCITY:
            return Object.assign({}, state, action.city)
		default:
			return state;
	}
}
