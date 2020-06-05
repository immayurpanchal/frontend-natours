/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const ScrollToTop = (props) => {
	const { history } = props;

	useEffect(() => {
		const unlisten = history.listen(() => {
			window.scrollTo(0, 0);
		});

		return () => {
			unlisten();
		};
	}, []);

	return <>{props.children}</>;
};

export default withRouter(ScrollToTop);
