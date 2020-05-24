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
import { TOGGLE_TOASTER } from '../toaster/toaster.constants';
import { toggleToaster } from '../toaster/toaster.action';

export const loginUser = (email, password) => {
	return async (dispatch) => {
		try {
			const res = await natours.post('/users/login', {
				email,
				password,
			});

			if (res.data.status === 'success') {
				const cookie = new Cookies();
				cookie.set('jwt', res.data.token);
				dispatch({ type: USER_LOGIN, payload: res.data.data.user });
				dispatch({
					type: TOGGLE_TOASTER,
					visible: true,
					message: 'Logged in Successfully',
					isSuccess: true,
				});
				history.push('/');
				return;
			}
		} catch (error) {
			dispatch({ type: USER_AUTH_FAILED });
			dispatch({
				type: TOGGLE_TOASTER,
				visible: true,
				message: 'Invalid Login or password',
				isSuccess: false,
			});
			return;
		}
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
			const { data } = await natours.get('/users/me');

			return dispatch({ type: GET_CURRENT_USER, payload: data.data.tour });
		} catch (error) {
			if (error.response && error.response.status === 401) {
				dispatch({ type: USER_AUTH_FAILED });
				return;
			}
		}
	};
};

export const logoutCurrentUser = () => {
	return (dispatch) => {
		const cookie = new Cookies();
		cookie.remove('jwt');
		dispatch({ type: USER_LOGOUT });
		dispatch(
			toggleToaster({
				visible: true,
				message: 'Logged out successfully',
				isSuccess: true,
			})
		);
		history.push('/');
	};
};

export const signupUser = (userData) => {
	const { name, email, password, passwordConfirm } = userData;
	return async (dispatch) => {
		try {
			dispatch(
				toggleToaster({
					visible: true,
					isSuccess: true,
					message: 'Creating your account please wait...',
				})
			);
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
		} catch (error) {
			dispatch(
				toggleToaster({
					visible: true,
					isSuccess: false,
					message: 'Failed to create your account. Try Again',
				})
			);
		}
	};
};

export const updateCurrentUserData = (userData) => {
	return async (dispatch) => {
		try {
			dispatch(
				toggleToaster({
					visible: true,
					isSuccess: true,
					message: 'Your profile is being updated...',
				})
			);

			const res = await natours.patch('/users/updateMe', userData);

			dispatch(
				toggleToaster({
					visible: true,
					isSuccess: true,
					message: 'Data successfully updated',
				})
			);

			dispatch({ type: UPDATE_CURRENT_USER, payload: res.data.data.user });
		} catch (error) {
			dispatch(
				toggleToaster({
					visible: true,
					isSuccess: false,
					message: 'Failed to update your profile',
				})
			);
		}
	};
};

export const updateCurrentUserPassword = (passwordData) => {
	return async (dispatch) => {
		try {
			dispatch(
				toggleToaster({
					visible: true,
					isSuccess: true,
					message: 'Password is being updated...',
				})
			);

			const res = await natours.patch('/users/updateMyPassword', passwordData);

			dispatch(
				toggleToaster({
					visible: true,
					isSuccess: true,
					message: 'Password updated successfully',
				})
			);

			dispatch({
				type: UPDATE_CURRENT_USER_PASSWORD,
				payload: res.data.data.user,
			});
		} catch (error) {
			console.log(error.response);
			dispatch(
				toggleToaster({
					visible: true,
					isSuccess: false,
					message:
						'Failed to update your password. Check current password or new password combination',
				})
			);
		}
	};
};
