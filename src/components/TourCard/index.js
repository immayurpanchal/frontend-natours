import React from 'react';
import { Link } from 'react-router-dom';

const TourCard = (props) => {
	const {
		tour: {
			name,
			difficulty,
			duration,
			summary,
			startLocation,
			price,
			maxGroupSize,
			ratingAverage,
			ratingQuantity,
			locations,
			startDates,
			images,
			id,
		},
	} = props;

	const getStartTime = (time) =>
		new Date(time).toLocaleString('en-US', {
			year: 'numeric',
			month: 'long',
		});

	return (
		<div className='card'>
			<div className='card__header'>
				<div className='card__picture'>
					<div className='card__picture-overlay'>&nbsp;</div>
					<img
						className='card__picture-img'
						src={`/img/tours/${images[0]}`}
						alt='The Mountain Biker'
					/>
				</div>
				<h3 className='heading-tertirary'>
					<span>{name}</span>
				</h3>
			</div>
			<div className='card__details'>
				<h4 className='card__sub-heading'>
					{difficulty} {duration}-day tour
				</h4>
				<p className='card__text'>{summary}</p>
				<div className='card__data'>
					<svg className='card__icon'>
						<use href='/img/icons.svg#icon-map-pin'></use>
					</svg>
					<span>{startLocation.description}</span>
				</div>
				<div className='card__data'>
					<svg className='card__icon'>
						<use href='/img/icons.svg#icon-calendar'></use>
					</svg>
					<span>{getStartTime(startDates[0])}</span>
				</div>
				<div className='card__data'>
					<svg className='card__icon'>
						<use href='/img/icons.svg#icon-flag'></use>
					</svg>
					<span>{locations.length} stops</span>
				</div>
				<div className='card__data'>
					<svg className='card__icon'>
						<use href='/img/icons.svg#icon-user'></use>
					</svg>
					<span>{maxGroupSize} people</span>
				</div>
			</div>{' '}
			<div className='card__footer'>
				<p>
					<span className='card__footer-value'>${price}</span>{' '}
					<span className='card__footer-text'>per person</span>
				</p>
				<p className='card__ratings'>
					<span className='card__footer-value'>{ratingAverage}</span>{' '}
					<span className='card__footer-text'>rating ({ratingQuantity})</span>
				</p>
				<Link className='btn btn--green btn--small' to={`/${id}`}>
					Details
				</Link>
			</div>
		</div>
	);
};

export default TourCard;
