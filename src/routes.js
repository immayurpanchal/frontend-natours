import Loadable from 'react-loadable';
import Loading from './components/Loading';

const Login = Loadable({
	loader: () => import(/* webpackChunkName: "Login" */ './components/Login'),
	loading: Loading,
});

const TourList = Loadable({
	loader: () => import(/* webpackChunkName: "TourList" */ './components/TourList'),
	loading: Loading,
});

const MyAccount = Loadable({
	loader: () => import(/* webpackChunkName: "MyAccount" */ './components/MyAccount'),
	loading: Loading,
});

const SignUp = Loadable({
	loader: () => import(/* webpackChunkName: "Signup" */ './components/SignUp'),
	loading: Loading,
});

const MyTours = Loadable({
	loader: () => import(/* webpackChunkName: "MyTours" */ './components/MyTours'),
	loading: Loading,
});

const TourDetails = Loadable({
	loader: () => import(/* webpackChunkName: "TourDetails" */ './components/TourDetails'),
	loading: Loading,
});

export const getRoutes = (prefix = '') => [
	{ path: `${prefix}/login`, component: Login, key: 'login' },
	{ path: `${prefix}/me`, component: MyAccount, key: 'myAccount' },
	{ path: `${prefix}/signup`, component: SignUp, key: 'signUp' },
	{ path: `${prefix}/my-tours`, component: MyTours, key: 'myTours' },
	{ path: `${prefix}/:tourSlug`, component: TourDetails, key: 'tourSlug' },
	{ path: `${prefix}/`, component: TourList, key: 'home' },
];
