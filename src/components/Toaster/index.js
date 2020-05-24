/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleToaster } from '../../modules/toaster/toaster.action';

const Toaster = () => {
	const dispatch = useDispatch();
	const { isToasterVisible, message, isSuccess } = useSelector((state) => ({
		isToasterVisible: state.toaster.visible,
		message: state.toaster.message,
		isSuccess: state.toaster.isSuccess,
	}));

	useEffect(() => {
		if (isToasterVisible) {
			setTimeout(() => {
				dispatch(toggleToaster({ visible: false }));
			}, 5000);
		}
	}, [isToasterVisible]);

	if (isToasterVisible) {
		return (
			<div class={`alert alert--${isSuccess ? 'success' : 'error'}`}>
				{message}
			</div>
		);
	}

	return null;
};

export default Toaster;
