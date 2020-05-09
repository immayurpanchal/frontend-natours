import Cookies from 'universal-cookie';
import natours from '../../apis/natours';
import history from '../../modules/history';
import {
	USER_LOGIN,
	GET_CURRENT_USER,
	USER_LOGOUT,
	USER_AUTH_FAILED,
	USER_SIGNUP,
	UPDATE_CURRENT_USER,
	UPDATE_CURRENT_USER_PASSWORD,
} from './user.constants';

export const loginUser = (email, password) => {
	return async (dispatch) => {
		const res = await natours.post('/users/login', {
			email,
			password,
		});

		if (res.data.status === 'success') {
			const cookie = new Cookies();
			cookie.set('jwt', res.data.token);
			history.push('/');
			return dispatch({ type: USER_LOGIN, payload: res.data.data.user });
		}

		dispatch({ type: USER_AUTH_FAILED });
	};
};

export const getCurrentUser = () => {
	return async (dispatch) => {
		const cookie = new Cookies();
		const token = cookie.get('jwt');
		if (!token) {
			return dispatch({ type: USER_AUTH_FAILED });
		}

		try {
			const { data } = await natours.get('/users/me', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			return dispatch({ type: GET_CURRENT_USER, payload: data.data.tour });
		} catch (error) {
			if (error.response.status === 401)
				return dispatch({ type: USER_AUTH_FAILED });
		}
	};
};

export const logoutCurrentUser = () => {
	return (dispatch) => {
		const cookie = new Cookies();
		cookie.remove('jwt');
		dispatch({ type: USER_LOGOUT });
		history.push('/');
	};
};

export const signupUser = (userData) => {
	const { name, email, password, passwordConfirm } = userData;
	return async (dispatch) => {
		const res = await natours.post('/users/signup', {
			name,
			email,
			password,
			passwordConfirm,
		});

		const cookie = new Cookies();
		cookie.set('jwt', res.data.token);

		dispatch({ type: USER_SIGNUP, payload: res.data.data.user });
		history.push('/');
	};
};

export const updateCurrentUserData = (userData) => {
	return async (dispatch) => {
		const cookie = new Cookies();
		const token = cookie.get('jwt');

		const res = await natours.patch('/users/updateMe', userData, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		dispatch({ type: UPDATE_CURRENT_USER, payload: res.data.data.user });
	};
};

export const updateCurrentUserPassword = (passwordData) => {
	return async (dispatch) => {
		const cookie = new Cookies();
		const token = cookie.get('jwt');

		try {
			const res = await natours.patch('/users/updateMyPassword', passwordData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			dispatch({
				type: UPDATE_CURRENT_USER_PASSWORD,
				payload: res.data.data.user,
			});

			history.push('/');
		} catch (error) {
			console.log(error.response);
		}
	};
};
