import { GET_CURRENT_USER_BOOKINGS } from './booking.constants';

const initialState = {
	items: [],
};

export const bookingReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CURRENT_USER_BOOKINGS:
			return {
				...state,
				items: action.payload,
			};
		default:
			return state;
	}
};
