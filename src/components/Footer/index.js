import React from 'react';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__logo'>
				<img src='/img/logo-green.png' alt='Natour logo' />
			</div>
			<ul className='footer__nav'>
				<li>
					<a href='/test'>About us</a>
				</li>
				<li>
					<a href='/test'>Download apps</a>
				</li>
				<li>
					<a href='/test'>Become a guide</a>
				</li>
				<li>
					<a href='/test'>Careers</a>
				</li>
				<li>
					<a href='/test'>Contact</a>
				</li>
			</ul>
			<p className='footer__copyright'>© 2020 by Jonas Schmedtmann.</p>
		</footer>
	);
};

export default Footer;
