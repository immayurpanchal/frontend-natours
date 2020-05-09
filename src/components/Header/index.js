/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getCurrentUser,
	logoutCurrentUser,
} from '../../modules/user/user.action';
import { Link } from 'react-router-dom';

const Header = () => {
	const [isLoggedIn, setLogin] = useState(false);

	const dispatch = useDispatch();
	const { user } = useSelector((state) => ({ user: state.user }));

	const onLogoutClick = () => {
		dispatch(logoutCurrentUser());
	};

	useEffect(() => {
		dispatch(getCurrentUser());
	}, []);

	useEffect(() => {
		if (user.profile.email) {
			setLogin(true);
		} else {
			setLogin(false);
		}
	}, [user]);

	return (
		<header className='header'>
			<nav className='nav nav--tours'>
				<Link className='nav__el' to='/'>
					All tours
				</Link>
			</nav>
			<div className='header__logo'>
				<img src='/img/logo-white.png' alt='Natours logo' />
			</div>
			{isLoggedIn && (
				<nav className='nav nav--user'>
					<button className='nav__el nav__el--logout' onClick={onLogoutClick}>
						Log out
					</button>
					<Link className='nav__el' to='/me'>
						<img
							className='nav__user-img'
							src='/img/users/user-2.jpg'
							alt='Lourdes Browning'
						/>
						<span>{user.profile.name}</span>
					</Link>
				</nav>
			)}
			{!isLoggedIn && (
				<nav className='nav nav--user'>
					<Link className='nav__el' to='/login'>
						Log in
					</Link>
					<Link className='nav__el nav__el--cta' to='/signup'>
						Sign up
					</Link>
				</nav>
			)}
		</header>
	);
};

export default Header;
