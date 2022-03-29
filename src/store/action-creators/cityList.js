import { EMPTYLISTCITY, UPDATELISTCITY } from "../../types/cityList"

export const UpdateListCity = (listCity) => {
	return {
		type: UPDATELISTCITY,
		listCity: listCity,
	}
}

export const EmptyListCity = () => {
	return {
		type: EMPTYLISTCITY,
	}
}

export function fetchListCity(value) {
    return function(dispatch) {
        return fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=9f34aadc54ee8673083896046d343a8a`)
            .then(response => response.json())
            .then(json => {dispatch(UpdateListCity(json))})
    }
}