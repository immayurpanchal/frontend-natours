/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTours } from '../../modules/tour/tour.action';
import Loading from '../Loading';
import TourCard from '../TourCard';

const TourList = () => {
	const dispatch = useDispatch();
	const {
		tours: { items },
	} = useSelector((state) => ({ tours: state.tours }));

	useEffect(() => {
		if (!items.length) {
			dispatch(getAllTours());
		}
	}, []);

	return (
		<main className='main'>
			{!items.length && <Loading width='100px' height='100px' />}
			{items.length && (
				<div className='card-container'>
					{items.map((item) => (
						<TourCard key={item.id} tour={item} />
					))}
				</div>
			)}
		</main>
	);
};

export default TourList;
