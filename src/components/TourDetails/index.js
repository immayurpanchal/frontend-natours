import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getATour } from '../../modules/tour/tour.action';
import { Link } from 'react-router-dom';
import { createBooking } from '../../modules/booking/booking.action';
import Loading from '../Loading';
import { toggleToaster } from '../../modules/toaster/toaster.action';

const TourDetails = (props) => {
	const {
		match: { params },
	} = props;

	const { tour, isLoggedIn } = useSelector((state) => ({
		tour: state.tours.tour,
		isLoggedIn: state.user.profile.email,
	}));

	const dispatch = useDispatch();

	const {
		name,
		startLocation,
		startDates,
		difficulty,
		maxGroupSize,
		ratingAverage,
		duration,
		guides,
		description,
		images,
		reviews,
	} = tour;

	const getStartTime = (time) =>
		new Date(time).toLocaleString('en-US', {
			year: 'numeric',
			month: 'long',
		});

	const onUserCheckout = () => {
		dispatch(createBooking());
		dispatch(
			toggleToaster({
				visible: true,
				isSuccess: true,
				message: 'Processing... Please do not click again...',
			})
		);
	};

	useEffect(() => {
		dispatch(getATour(params.tourSlug));
	}, [dispatch, params.tourSlug, tour.name]);

	if (!tour.name) {
		return (
			<div className='main'>
				<div className='class-container'>
					<Loading width='100px' height='100px' />
				</div>
			</div>
		);
	}

	return (
		<>
			<section className='section-header'>
				<div className='header__hero'>
					<div className='header__hero-overlay'>&nbsp;</div>
					<img
						className='header__hero-img'
						src='/img/tours/tour-2-cover.jpg'
						alt={name}
					/>
				</div>
				<div className='heading-box'>
					<h1 className='heading-primary'>
						<span>{name}</span>
					</h1>
					<div className='heading-box__group'>
						<div className='heading-box__detail'>
							<svg className='heading-box__icon'>
								<use href='/img/icons.svg#icon-clock'></use>
							</svg>
							<span className='heading-box__text'>{duration} days</span>
						</div>
						<div className='heading-box__detail'>
							<svg className='heading-box__icon'>
								<use href='/img/icons.svg#icon-map-pin'></use>
							</svg>
							<span className='heading-box__text'>
								{startLocation.description}
							</span>
						</div>
					</div>
				</div>
			</section>

			<section className='section-description'>
				<div className='overview-box'>
					<div>
						<div className='overview-box__group'>
							<h2 className='heading-secondary ma-bt-lg'>Quick facts</h2>
							<div className='overview-box__detail'>
								<svg className='overview-box__icon'>
									<use href='/img/icons.svg#icon-calendar'></use>
								</svg>
								<span className='overview-box__label'>Next date</span>
								<span className='overview-box__text'>
									{getStartTime(startDates[0])}
								</span>
							</div>
							<div className='overview-box__detail'>
								<svg className='overview-box__icon'>
									<use href='/img/icons.svg#icon-trending-up'></use>
								</svg>
								<span className='overview-box__label'>Difficulty</span>
								<span className='overview-box__text'>{difficulty}</span>
							</div>
							<div className='overview-box__detail'>
								<svg className='overview-box__icon'>
									<use href='/img/icons.svg#icon-user'></use>
								</svg>
								<span className='overview-box__label'>Participants</span>
								<span className='overview-box__text'>
									{maxGroupSize} people
								</span>
							</div>
							<div className='overview-box__detail'>
								<svg className='overview-box__icon'>
									<use href='/img/icons.svg#icon-star'></use>
								</svg>
								<span className='overview-box__label'>Rating</span>
								<span className='overview-box__text'>{ratingAverage} / 5</span>
							</div>
						</div>
						<div className='overview-box__group'>
							<h2 className='heading-secondary ma-bt-lg'>Your tour guides</h2>
							{guides.map((guide, index) => (
								<div className='overview-box__detail' key={index}>
									<img
										className='overview-box__img'
										src={`/img/users/${guide.photo}`}
										alt={guide.name}
									/>
									<span className='overview-box__label'>
										{guide.role === 'guide' ? 'TOUR-GUIDE' : guide.role}
									</span>
									<span className='overview-box__text'>{guide.name}</span>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className='description-box'>
					<h2 className='heading-secondary ma-bt-lg'>About {name} tour</h2>
					<p className='description__text'>{description}</p>
				</div>
			</section>

			<section className='section-pictures'>
				{images.map((image, index) => (
					<div className='picture-box' key={index}>
						<img
							className='picture-box__img picture-box__img--1'
							src={`/img/tours/${image}`}
							alt='The Park Camper Tour 1'
						/>
					</div>
				))}
			</section>

			<section className='section-reviews'>
				<div className='reviews'>
					{reviews.map((review, index) => (
						<div className='reviews__card' key={index}>
							<div className='reviews__avatar'>
								<img
									className='reviews__avatar-img'
									src={`/img/users/${review.user.photo}`}
									alt={review.user.name}
								/>
								<h6 className='reviews__user'>{review.user.name}</h6>
							</div>
							<p className='reviews__text'>{review.review}</p>
							<div className='reviews__rating'>
								<svg className='reviews__star reviews__star--active'>
									<use href='/img/icons.svg#icon-star'></use>
								</svg>
								<svg className='reviews__star reviews__star--active'>
									<use href='/img/icons.svg#icon-star'></use>
								</svg>
								<svg className='reviews__star reviews__star--active'>
									<use href='/img/icons.svg#icon-star'></use>
								</svg>
								<svg className='reviews__star reviews__star--active'>
									<use href='/img/icons.svg#icon-star'></use>
								</svg>
								<svg className='reviews__star reviews__star--active'>
									<use href='/img/icons.svg#icon-star'></use>
								</svg>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className='section-cta'>
				<div className='cta'>
					<div className='cta__img cta__img--logo'>
						<img src='/img/logo-white.png' alt='Natours logo' />
					</div>
					<img
						className='cta__img cta__img--1'
						src='/img/tours/tour-2-2.jpg'
						alt='Tour '
					/>
					<img
						className='cta__img cta__img--2'
						src='/img/tours/tour-2-3.jpg'
						alt='Tour'
					/>
					<div className='cta__content'>
						<h2 className='heading-secondary'>What are you waiting for?</h2>
						<p className='cta__text'>
							7 days. 1 adventure. Infinite memories. Make it yours today!
						</p>
						{!isLoggedIn && (
							<Link className='btn btn--green span-all-rows' to='/login'>
								Log in to book tour
							</Link>
						)}
						{isLoggedIn && (
							<button
								className='btn btn--green span-all-rows'
								onClick={onUserCheckout}
							>
								Book Tour Now!
							</button>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default TourDetails;
