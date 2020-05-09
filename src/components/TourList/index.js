/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import TourCard from '../TourCard';
import { getAllTours } from '../../modules/tour/tour.action';
import { useDispatch, useSelector } from 'react-redux';

const TourList = () => {
	const dispatch = useDispatch();
	const {
		tours: { items },
	} = useSelector((state) => ({ tours: state.tours }));

	useEffect(() => {
		dispatch(getAllTours());
	}, []);

	return (
		<main className='main'>
			<div className='card-container'>
				{items.map((item) => (
					<TourCard key={item.id} tour={item} />
				))}
			</div>
		</main>
	);
};

export default TourList;
