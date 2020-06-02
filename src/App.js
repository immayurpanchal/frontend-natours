import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import en from './locales/en-translations.json';
import hi from './locales/hi-translations.json';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';
import MyAccount from './components/MyAccount';
import Signup from './components/SignUp';
import TourDetails from './components/TourDetails';
import TourList from './components/TourList';
import history from './modules/history';
import Toaster from './components/Toaster';
import MyTours from './components/MyTours';
import LazyLoad from 'react-lazyload';

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		backend: {
			loadPath: './locales/en-translations.json',
		},
		resources: {
			en: {
				translation: en,
			},
			hi: {
				translation: hi,
			},
		},
		lng: 'en',
		fallbackLng: 'en',

		interpolation: {
			escapeValue: false,
		},
	});

const App = () => {
	return (
		<>
			<Router history={history}>
				<Toaster />
				<Header />
				<Switch>
					<Route path='/login' exact component={Login} />
					<Route path='/me' exact component={MyAccount} />
					<Route path='/signup' exact component={Signup} />
					<Route path='/my-tours' exact component={MyTours} />
					<Route path='/:tourSlug' exact component={TourDetails} />
					<Route path='/' exact component={TourList} />
				</Switch>
				<LazyLoad height='200' once>
					<Footer />
				</LazyLoad>
			</Router>
		</>
	);
};

export default App;
