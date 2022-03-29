import { EMPTYLISTCITY, UPDATELISTCITY } from "../../types/cityList";



export const cityListReducer = (state = {}, action) => {
	switch (action.type) {
        case EMPTYLISTCITY:
            return {}
        case UPDATELISTCITY:
            return Object.assign({}, action.listCity)
        default:
            return state;
    }
}
