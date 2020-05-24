import { TOGGLE_TOASTER } from './toaster.constants';

const initialState = {
	visible: false,
	message: '',
	isSuccess: false,
};

export const toasterReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_TOASTER:
			return {
				visible: action.visible,
				message: action.message,
				isSuccess: action.isSuccess,
			};
		default:
			return state;
	}
};
