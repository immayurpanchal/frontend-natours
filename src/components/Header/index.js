import React, { useState } from 'react';

const Header = () => {
	const [isLoggedIn, setLogin] = useState(false);

	return (
		<header className='header'>
			<nav className='nav nav--tours'>
				<a className='nav__el' href='/'>
					All tours
				</a>
			</nav>
			<div className='header__logo'>
				<img src='/img/logo-white.png' alt='Natours logo' />
			</div>
			{isLoggedIn && (
				<nav className='nav nav--user'>
					<a className='nav__el nav__el--logout' href='/me'>
						Log out
					</a>
					<a className='nav__el' href='/me'>
						<img
							className='nav__user-img'
							src='/img/users/user-2.jpg'
							alt='Lourdes Browning'
						/>
						<span>Lourdes</span>
					</a>
				</nav>
			)}
			{!isLoggedIn && (
				<nav className='nav nav--user'>
					<a className='nav__el' href='/login'>
						Log in
					</a>
					<a className='nav__el nav__el--cta' href='/signup'>
						Sign up
					</a>
				</nav>
			)}
		</header>
	);
};

export default Header;
