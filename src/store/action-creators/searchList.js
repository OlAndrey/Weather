import { fetchAPI } from "../../API/FetchAPI"
import { EMPTY_LIST_CITY, UPDATE_LIST_CITY, UPDATE_SEARCH_AREA } from "../../types/searchList"

export const updateSearchArea = (text) => {
	return {
		type: UPDATE_SEARCH_AREA,
		newText: text
	}
}

export const updateListCity = (listCity) => {
	return {
		type: UPDATE_LIST_CITY,
		listCity: listCity,
	}
}

export const emptyListCity = () => {
	return {
		type: EMPTY_LIST_CITY,
	}
}

export const fetchListCity = (value) => (dispatch) => {
	return fetchAPI.fetchListCity(value)
		.then(json => {dispatch(updateListCity(json))})
}