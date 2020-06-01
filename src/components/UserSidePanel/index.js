import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const UserSidePanel = () => {
	const { t: translation } = useTranslation();
	return (
		<nav className='user-view__menu'>
			<ul className='side-nav'>
				<li className='side-nav--active'>
					<a href='/#'>
						<svg>
							<use href='img/icons.svg#icon-settings'></use>
						</svg>
						{translation('profile.settings')}
					</a>
				</li>
				<li>
					<Link to='/my-tours'>
						<svg>
							<use href='img/icons.svg#icon-briefcase'></use>
						</svg>
						{translation('profile.myBookings')}
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default UserSidePanel;
