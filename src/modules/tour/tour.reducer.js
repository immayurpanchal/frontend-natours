import { GET_ALL_TOURS } from './tour.constants';

const initialState = {
	items: [],
};

export const tourReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_TOURS:
			return { ...state, items: action.payload.data };
		default:
			return state;
	}
};
