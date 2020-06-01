import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../modules/user/user.action';
import './Login.scss';
import { toggleToaster } from '../../modules/toaster/toaster.action';
import { useTranslation } from 'react-i18next';

const Login = () => {
	const { t: translation } = useTranslation();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const { isUserLoggedIn } = useSelector((state) => ({
		isUserLoggedIn: state.user.profile.email,
	}));

	const onFormSubmit = (e) => {
		e.preventDefault();

		dispatch(loginUser(email, password));
		dispatch(toggleToaster({ visible: true, isSuccess: true, message: translation('toaster.validating') }));
	};

	if (isUserLoggedIn) {
		return (
			<div className='logged-in-user'>
				<h1>You are already logged in</h1>
			</div>
		);
	}
	return (
		<main className='main'>
			<div className='login-form'>
				<h2 className='heading-secondary ma-bt-lg'>{translation('login.title')}</h2>
				<form className='form form--login' onSubmit={onFormSubmit}>
					<div className='form__group'>
						<label className='form__label' htmlFor='email'>
							{translation('login.email')}
						</label>
						<input
							className='form__input'
							id='email'
							type='email'
							placeholder='you@example.com'
							required=''
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className='form__group ma-bt-md'>
						<label className='form__label' htmlFor='password'>
							{translation('login.password')}
						</label>
						<input
							className='form__input'
							id='password'
							type='password'
							placeholder='••••••••'
							required=''
							minLength='8'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className='form__group'>
						<button className='btn btn--green' type='submit'>
							{translation('login.login')}
						</button>
					</div>
				</form>
			</div>
		</main>
	);
};

export default Login;
