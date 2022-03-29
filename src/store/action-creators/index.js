import * as cityActionCreators from './city';
import * as cityListActionCreators from './cityList';
import * as weatherActionCreators from './weather';

export const actionCreators = {
    ...cityListActionCreators,
	...cityActionCreators,
	...weatherActionCreators,
}