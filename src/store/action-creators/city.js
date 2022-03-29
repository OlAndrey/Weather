import { SELECTCITY } from "../../types/city"


export const SelectCity = (city) => {
	return {
		type: SELECTCITY,
		city: city,
	}
}
