import { GET_ALL_TOURS, GET_A_TOUR } from './tour.constants';

const initialState = {
	items: [],
	tour: {},
};

export const tourReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_TOURS:
			return { ...state, items: action.payload.data };
		case GET_A_TOUR:
			return { ...state, tour: action.payload.data };
		default:
			return state;
	}
};
