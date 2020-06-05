import lodable from '@loadable/component';

const Login = lodable(() => import(/* webpackChunkName: "Login" */ './components/Login'));

const TourList = lodable(() => import(/* webpackChunkName: "TourList" */ './components/TourList'));

const MyAccount = lodable(() => import(/* webpackChunkName: "MyAccount" */ './components/MyAccount'));

const SignUp = lodable(() => import(/* webpackChunkName: "Signup" */ './components/SignUp'));

const MyTours = lodable(() => import(/* webpackChunkName: "MyTours" */ './components/MyTours'));

const TourDetails = lodable(() => import(/* webpackChunkName: "TourDetails" */ './components/TourDetails'));

export const getRoutes = (prefix = '') => [
	{ path: `${prefix}/login`, component: Login, key: 'login' },
	{ path: `${prefix}/me`, component: MyAccount, key: 'myAccount' },
	{ path: `${prefix}/signup`, component: SignUp, key: 'signUp' },
	{ path: `${prefix}/my-tours`, component: MyTours, key: 'myTours' },
	{ path: `${prefix}/:tourSlug`, component: TourDetails, key: 'tourSlug' },
	{ path: `${prefix}/`, component: TourList, key: 'home' },
];
