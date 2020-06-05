import React from 'react';
import LazyLoad from 'react-lazyload';
import { Route, Router, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Toaster from './components/Toaster';
import history from './modules/history';
import { getRoutes } from './routes';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n-browser';
import Loading from './components/Loading';

const App = (props) => {
	const { prefix } = props;
	return (
		<React.Suspense fallback={Loading}>
			<I18nextProvider i18n={i18n} initialLanguage={'en'}>
				<Router history={history}>
					<Toaster />
					<Header />
					<Switch>
						{getRoutes(prefix).map((route) => (
							<Route key={route.key} {...route} />
						))}
					</Switch>
					<LazyLoad height='200' once>
						<Footer />
					</LazyLoad>
				</Router>
			</I18nextProvider>
		</React.Suspense>
	);
};

export default App;
