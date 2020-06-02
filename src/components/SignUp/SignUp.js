import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { signupUser } from '../../modules/user/user.action';

const Signup = () => {
	const { t: translation } = useTranslation();
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');
	const [email, setEmail] = useState('');

	const dispatch = useDispatch();

	const onFormSubmitClick = (e) => {
		e.preventDefault();

		dispatch(signupUser({ name, email, password, passwordConfirm }));
	};

	return (
		<main className='main'>
			<div className='login-form'>
				<h2 className='heading-secondary ma-bt-lg'>{translation('signup.title')}</h2>
				<form className='form form--signup' onSubmit={onFormSubmitClick}>
					<div className='form__group'>
						<label className='form__label' htmlFor='name'>
							{translation('signup.name')}
						</label>
						<input
							className='form__input'
							id='name'
							type='text'
							placeholder=''
							required=''
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className='form__group'>
						<label className='form__label' htmlFor='email'>
							{translation('signup.email')}
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
							{translation('signup.password')}
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
					<div className='form__group ma-bt-md'>
						<label className='form__label' htmlFor='passwordConfirm'>
							{translation('signup.confirmPassword')}
						</label>
						<input
							className='form__input'
							id='passwordConfirm'
							type='password'
							placeholder='••••••••'
							required=''
							minLength='8'
							value={passwordConfirm}
							onChange={(e) => setPasswordConfirm(e.target.value)}
						/>
					</div>
					<div className='form__group'>
						<button className='btn btn--green' type='submit'>
							{translation('signup.signup')}
						</button>
					</div>
				</form>
			</div>
		</main>
	);
};

export default Signup;
