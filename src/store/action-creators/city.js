import { SELECTCITY } from "../../types/city"


export const selectCity = (city) => {
	return {
		type: SELECTCITY,
		city: city,
	}
}
