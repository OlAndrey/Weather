import { combineReducers } from 'redux';
import { weatherReducer } from './weatherReducers';
import { cityReducer } from './cityReducers';
import { cityListReducer } from './cityListReducers';


export const rootReducer = combineReducers({
    cityList: cityListReducer,
    city: cityReducer,
    weather: weatherReducer
});
