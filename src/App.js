import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';
import MyAccount from './components/MyAccount';
import Signup from './components/SignUp';
import TourDetails from './components/TourDetails';
import TourList from './components/TourList';
import history from './modules/history';
import Toaster from './components/Toaster';

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
					<Route path='/:tourSlug' exact component={TourDetails} />
					<Route path='/' exact component={TourList} />
				</Switch>
				<Footer />
			</Router>
		</>
	);
};

export default App;
