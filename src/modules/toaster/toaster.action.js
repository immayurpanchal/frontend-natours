import { TOGGLE_TOASTER } from './toaster.constants';

export const toggleToaster = ({ visible, isSuccess, message }) => {
	return (dispatch) => {
		dispatch({ type: TOGGLE_TOASTER, visible, isSuccess, message });
	};
};
