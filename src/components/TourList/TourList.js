/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTours } from '../../modules/tour/tour.action';
import Loading from '../Loading';
import TourCard from '../TourCard';
import InfiniteScroll from 'react-infinite-scroll-component';

const TourList = () => {
	const dispatch = useDispatch();
	const {
		tours: { items },
	} = useSelector((state) => ({ tours: state.tours }));

	const [tourItems, setItems] = useState(items || []);

	useEffect(() => {
		dispatch(getAllTours());
	}, []);

	useEffect(() => {
		setItems(items);
	}, [items]);

	const fetchMoreData = () => {
		setTimeout(() => {
			setItems([...tourItems, ...tourItems.slice(0, 5)]);
		}, 3000);
	};

	return (
		<main className='main'>
			{!tourItems.length && <Loading />}
			{tourItems.length && (
				<InfiniteScroll dataLength={tourItems.length} next={fetchMoreData} hasMore={true} loader={<Loading />}>
					<div className='card-container'>
						{tourItems.map((item) => (
							<TourCard key={item.id} tour={item} />
						))}
					</div>
				</InfiniteScroll>
			)}
		</main>
	);
};

export default TourList;
