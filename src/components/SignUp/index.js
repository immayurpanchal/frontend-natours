import React, { useState } from 'react';
import { signupUser } from '../../modules/user/user.action';
import { useDispatch } from 'react-redux';

const Signup = () => {
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
				<h2 className='heading-secondary ma-bt-lg'>Create your account!</h2>
				<form className='form form--signup' onSubmit={onFormSubmitClick}>
					<div className='form__group'>
						<label className='form__label' htmlFor='name'>
							Your name
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
							Email address
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
							Password
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
							Confirm password
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
							Sign up
						</button>
					</div>
				</form>
			</div>
		</main>
	);
};

export default Signup;
