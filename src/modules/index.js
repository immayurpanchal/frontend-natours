import { combineReducers } from 'redux';
import { tourReducer } from './tour/tour.reducer';

export const rootReducer = combineReducers({ tours: tourReducer });
