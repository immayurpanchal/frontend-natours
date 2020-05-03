import natours from '../../apis/natours';
import { GET_ALL_TOURS } from './tour.constants';

export const getAllTours = () => {
	return async (dispatch) => {
		const res = await natours.get('/tours');
		dispatch({ type: GET_ALL_TOURS, payload: { data: res.data.data.data } });
	};
};
