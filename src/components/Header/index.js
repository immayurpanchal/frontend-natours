/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { getCurrentUser, logoutCurrentUser } from '../../modules/user/user.action';

const Header = () => {
	const { t: translation, i18n } = useTranslation();
	const dispatch = useDispatch();

	const { isUserAuthorised: isLoggedIn, user } = useSelector((state) => ({
		isUserAuthorised: state.user.isUserAuthorised,
		user: state.user,
	}));

	const onLogoutClick = () => {
		dispatch(logoutCurrentUser());
	};

	const onLanguageChange = (e) => {
		switch (e.target.value) {
			case 'EN':
				i18n.changeLanguage('en-US');
				break;
			case 'HI':
				i18n.changeLanguage('hi');
				break;
			default:
				i18n.changeLanguage('en-US');
				break;
		}
	};

	useEffect(() => {
		dispatch(getCurrentUser());
	}, []);

	return (
		<header className='header'>
			<nav className='nav nav--tours'>
				<Link className='nav__el' to='/'>
					{translation('header.allTours')}
				</Link>
				<select onChange={onLanguageChange}>
					<option>EN</option>
					<option>HI</option>
				</select>
			</nav>
			<div className='header__logo'>
				<img src='/img/logo-white.png' alt='Natours logo' />
			</div>
			{isLoggedIn && (
				<nav className='nav nav--user'>
					<button className='nav__el nav__el--logout' onClick={onLogoutClick}>
						{translation('header.logout')}
					</button>
					<Link className='nav__el' to='/me'>
						<img className='nav__user-img' src='/img/users/user-2.jpg' alt='Lourdes Browning' />
						<span>{user.profile.name}</span>
					</Link>
				</nav>
			)}
			{!isLoggedIn && (
				<nav className='nav nav--user'>
					<Link className='nav__el' to='/login'>
						{translation('header.login')}
					</Link>
					<Link className='nav__el nav__el--cta' to='/signup'>
						{translation('header.signup')}
					</Link>
				</nav>
			)}
		</header>
	);
};

export default Header;
