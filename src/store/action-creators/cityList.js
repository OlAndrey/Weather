import { fetchAPI } from "../../API/FetchAPI"
import { EMPTYLISTCITY, UPDATELISTCITY } from "../../types/cityList"

export const updateListCity = (listCity) => {
	return {
		type: UPDATELISTCITY,
		listCity: listCity,
	}
}

export const emptyListCity = () => {
	return {
		type: EMPTYLISTCITY,
	}
}

export const fetchListCity = (value) => (dispatch) => {
	return fetchAPI.fetchListCity(value)
		.then(json => {dispatch(updateListCity(json))})
}