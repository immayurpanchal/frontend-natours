import natours from '../../apis/natours';
import { GET_ALL_TOURS, GET_A_TOUR } from './tour.constants';

export const getAllTours = () => {
	return async (dispatch) => {
		const res = await natours.get('/tours');
		dispatch({ type: GET_ALL_TOURS, payload: { data: res.data.data.data } });
	};
};

export const getATour = (id) => {
	return async (dispatch) => {
		const res = await natours.get(`/tours/${id}`);
		dispatch({ type: GET_A_TOUR, payload: { data: res.data.data.tour } });
	};
};
