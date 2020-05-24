import {
	USER_LOGIN,
	USER_LOGOUT,
	GET_CURRENT_USER,
	USER_AUTH_FAILED,
	USER_SIGNUP,
	UPDATE_CURRENT_USER,
	UPDATE_CURRENT_USER_PASSWORD,
} from './user.constants';

const initialState = {
	profile: {
		name: '',
		role: '',
		email: '',
		photo: '',
		id: '',
	},
	isUserAuthorised: false,
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_LOGIN:
			return {
				...state,
				profile: {
					name: action.payload.name,
					role: action.payload.role,
					email: action.payload.email,
					photo: action.payload.photo,
					id: action.payload._id,
				},
				isUserAuthorised: true,
			};

		case USER_LOGOUT:
			return {
				...state,
				profile: { ...initialState.profile },
				isUserAuthorised: false,
			};

		case USER_SIGNUP:
			return {
				...state,
				profile: {
					name: action.payload.name,
					role: action.payload.role,
					email: action.payload.email,
					photo: action.payload.photo,
					id: action.payload._id,
				},
				isUserAuthorised: true,
			};

		case GET_CURRENT_USER:
			return {
				...state,
				profile: {
					name: action.payload.name,
					role: action.payload.role,
					email: action.payload.email,
					photo: action.payload.photo,
					id: action.payload._id,
				},
				isUserAuthorised: true,
			};

		case USER_AUTH_FAILED:
			return {
				...state,
				profile: {
					...initialState.profile,
				},
				isUserAuthorised: false,
			};

		case UPDATE_CURRENT_USER:
			return {
				...state,
				profile: {
					...state.profile,
					...action.payload,
				},
			};

		case UPDATE_CURRENT_USER_PASSWORD:
			return {
				...state,
				profile: {
					role: action.payload.role,
					name: action.payload.name,
					email: action.payload.email,
					photo: action.payload.photo,
					id: action.payload.id,
				},
			};
		default:
			return state;
	}
};
