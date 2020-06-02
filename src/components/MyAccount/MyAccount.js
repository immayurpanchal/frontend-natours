import React from 'react';
import UserSidePanel from '../UserSidePanel';
import UserProfile from '../UserProfile';
import { useSelector } from 'react-redux';

const MyAccount = () => {
	const { isLoggedIn } = useSelector((state) => ({
		isLoggedIn: state.user.profile.email,
	}));

	return (
		<main className='main'>
			{!isLoggedIn && (
				<div style={{ textAlign: 'center' }}>
					<h1>Please login to see your profile </h1>
				</div>
			)}
			{isLoggedIn && (
				<div className='user-view'>
					<UserSidePanel />
					<UserProfile />
				</div>
			)}
		</main>
	);
};

export default MyAccount;
