import * as cityActionCreators from './city';
import * as searchListActionCreators from './searchList';
import * as weatherActionCreators from './weather';
import * as weatherListActionCreators from './weatherList';

export const actionCreators = {
    ...searchListActionCreators,
	...cityActionCreators,
	...weatherActionCreators,
	...weatherListActionCreators
}