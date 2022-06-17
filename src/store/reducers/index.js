import { combineReducers } from 'redux';
import { weatherReducer } from './weatherReducers';
import { cityReducer } from './cityReducers';
import { searchListReducer } from './searchListReducers';
import { weatherListReducer } from './weatherListReducers';


export const rootReducer = combineReducers({
    searchList: searchListReducer,
    city: cityReducer,
    weatherList: weatherListReducer,
    weather: weatherReducer
});
