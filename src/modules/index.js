import { combineReducers } from 'redux';
import { tourReducer } from './tour/tour.reducer';
import { userReducer } from './user/user.reducer';

export const rootReducer = combineReducers({
	tours: tourReducer,
	user: userReducer,
});
