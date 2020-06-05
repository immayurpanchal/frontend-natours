import React from 'react';
import { I18nextProvider } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Loading from './components/Loading';
import Toaster from './components/Toaster';
import i18n from './i18n-browser';
import history from './modules/history';
import { getRoutes } from './routes';

const App = (props) => {
	const { prefix } = props;
	return (
		<React.Suspense fallback={Loading}>
			<I18nextProvider i18n={i18n} initialLanguage={'en'}>
				<BrowserRouter history={history}>
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
				</BrowserRouter>
			</I18nextProvider>
		</React.Suspense>
	);
};

export default App;
