/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUserBookings } from '../../modules/booking/booking.action';
import TourCard from '../TourCard';
import Loading from '../Loading';

const MyTours = () => {
	const dispatch = useDispatch();
	const { bookings } = useSelector((state) => ({
		bookings: state.bookings.items,
	}));

	useEffect(() => {
		dispatch(getCurrentUserBookings());
	}, []);

	return (
		<main className='main'>
			{!bookings.length && <Loading width='100px' height='100px' />}
			<div className='card-container'>
				{bookings.map((booking) => (
					<TourCard key={booking.id} tour={booking.tour} />
				))}
			</div>
		</main>
	);
};

export default MyTours;
