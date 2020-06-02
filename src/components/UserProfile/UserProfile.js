/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentUserData, updateCurrentUserPassword } from '../../modules/user/user.action';
import { useTranslation } from 'react-i18next';

const UserProfile = () => {
	const { t: translation } = useTranslation();
	const { user } = useSelector((state) => ({ user: state.user }));

	const [name, setName] = useState(user.profile.name);
	const [email, setEmail] = useState(user.profile.email);
	const [currentPassword, setCurrentPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [newPasswordConfirm, setNewPasswordConfirm] = useState('');

	const dispatch = useDispatch();

	const onUserDataUpdate = (e) => {
		e.preventDefault();
		dispatch(updateCurrentUserData({ name, email }));
	};

	const onPasswordUpdate = (e) => {
		e.preventDefault();

		const updatedPassword = {
			passwordCurrent: currentPassword,
			password: newPassword,
			passwordConfirm: newPasswordConfirm,
		};

		dispatch(updateCurrentUserPassword(updatedPassword));
	};

	useEffect(() => {
		setName(user.profile.name);
		setEmail(user.profile.email);
	}, [user]);

	return (
		<div className='user-view__content'>
			<div className='user-view__form-container'>
				<h2 className='heading-secondary ma-bt-md'>{translation('profile.title')}</h2>
				<form className='form form-user-data' onSubmit={onUserDataUpdate}>
					<div className='form__group'>
						<label className='form__label' htmlFor='name'>
							{translation('profile.name')}
						</label>
						<input
							className='form__input'
							id='name'
							type='text'
							value={name}
							required=''
							name='name'
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className='form__group ma-bt-md'>
						<label className='form__label' htmlFor='email'>
							{translation('profile.email')}
						</label>
						<input
							className='form__input'
							id='email'
							type='email'
							value={email}
							required=''
							name='email'
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className='form__group form__photo-upload'>
						<img className='form__user-photo' src='/img/users/user-4.jpg' alt='User' />
						<input className='form__upload' type='file' accept='image/*' id='photo' name='photo' />
						<label htmlFor='photo'>{translation('profile.choosePhoto')}</label>
					</div>
					<div className='form__group right'>
						<button className='btn btn--small btn--green' type='submit'>
							{translation('profile.saveSettings')}
						</button>
					</div>
				</form>
			</div>
			<div className='line'>&nbsp;</div>
			<div className='user-view__form-container'>
				<h2 className='heading-secondary ma-bt-md'>{translation('profile.passwordChange')}</h2>
				<form className='form form-user-password' onSubmit={onPasswordUpdate}>
					<div className='form__group'>
						<label className='form__label' htmlFor='password-current'>
							{translation('profile.currentPassword')}
						</label>
						<input
							className='form__input'
							id='password-current'
							type='password'
							placeholder='••••••••'
							required=''
							minLength='8'
							value={currentPassword}
							onChange={(e) => setCurrentPassword(e.target.value)}
						/>
					</div>
					<div className='form__group'>
						<label className='form__label' htmlFor='password'>
							{translation('profile.newPassword')}
						</label>
						<input
							className='form__input'
							id='password'
							type='password'
							placeholder='••••••••'
							required=''
							minLength='8'
							value={newPassword}
							onChange={(e) => setNewPassword(e.target.value)}
						/>
					</div>
					<div className='form__group ma-bt-lg'>
						<label className='form__label' htmlFor='password-confirm'>
							{translation('profile.confirmPassword')}
						</label>
						<input
							className='form__input'
							id='password-confirm'
							type='password'
							placeholder='••••••••'
							required=''
							minLength='8'
							value={newPasswordConfirm}
							onChange={(e) => setNewPasswordConfirm(e.target.value)}
						/>
					</div>
					<div className='form__group right'>
						<button className='btn btn--small btn--green btn--save-password' type='submit'>
							{translation('profile.savePassword')}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UserProfile;
