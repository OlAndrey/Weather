import { EMPTY_LIST_CITY, UPDATE_LIST_CITY, UPDATE_SEARCH_AREA } from "../../types/searchList";

const initailState = {
    listCity: [],
    searchArea: ''
}

export const searchListReducer = (state = initailState, action) => {
	switch (action.type) {
        case EMPTY_LIST_CITY:
            return {
                ...state,
                listCity: []
            }
        case UPDATE_LIST_CITY:
            return {
                ...state,
                listCity: [...Object.values(action.listCity)]
            }
        case UPDATE_SEARCH_AREA:
            return {
                ...state,
                searchArea: action.newText
            }

        default:
            return state;
    }
}
