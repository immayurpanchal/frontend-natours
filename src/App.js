import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TourList from './components/TourList';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import TourDetails from './components/TourDetails';

function App() {
	return (
		<>
			<Header />
			<BrowserRouter>
				<Switch>
					<Route path='/:tourSlug' exact component={TourDetails} />
					<Route path='/' exact component={TourList} />
				</Switch>
			</BrowserRouter>
			<Footer />
		</>
	);
}

export default App;
