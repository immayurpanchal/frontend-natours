import React from 'react';
import { Link } from 'react-router-dom';

const UserSidePanel = () => {
	return (
		<nav className='user-view__menu'>
			<ul className='side-nav'>
				<li className='side-nav--active'>
					<a href='/#'>
						<svg>
							<use href='img/icons.svg#icon-settings'></use>
						</svg>
						Settings
					</a>
				</li>
				<li>
					<Link to='/my-tours'>
						<svg>
							<use href='img/icons.svg#icon-briefcase'></use>
						</svg>
						My bookings
					</Link>
				</li>
				<li>
					<a href='/#'>
						<svg>
							<use href='img/icons.svg#icon-star'></use>
						</svg>
						My reviews
					</a>
				</li>
				<li>
					<a href='/#'>
						<svg>
							<use href='img/icons.svg#icon-credit-card'></use>
						</svg>
						Billing
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default UserSidePanel;
