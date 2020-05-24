import { combineReducers } from 'redux';
import { tourReducer } from './tour/tour.reducer';
import { userReducer } from './user/user.reducer';
import { toasterReducer } from './toaster/toaster.reducer';
import { bookingReducer } from './booking/booking.reducer';

export const rootReducer = combineReducers({
	tours: tourReducer,
	user: userReducer,
	toaster: toasterReducer,
	bookings: bookingReducer,
});
