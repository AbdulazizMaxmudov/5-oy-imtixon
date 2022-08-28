import { useRef } from 'react';
import axios from 'axios';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import './register.css';
import RegisterImage from '../../assets/image/register.png'

export const Register = () => {
	const loginFirstName = useRef();
	const loginLastName = useRef();
	const loginPhone = useRef();
	const loginEmail = useRef();
	const loginPassword = useRef();
	const { token, setToken } = useAuth();
	const handleRegisterval = (evt) => {
		evt.preventDefault();
		axios
			.post('https://book-service-layer.herokuapp.com/user/register', {
				first_name: loginFirstName.current.value,
				last_name: loginLastName.current.value,
				phone: loginPhone.current.value,
				email: loginEmail.current.value,
				password: loginPassword.current.value,
			})
			.then(function (response) {
				console.log(response.data);
				if (response.data) {
					setToken(response.data);
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	return (
		<div className='register'>
			<div className='register-block'>
				<div className='register__image-block w-50'>
          <img src={RegisterImage} alt="Register image" />
        </div>
				<div className='register__form-block w-50'>
					<div className='rexister-text'>
          <h1>Sign up</h1>
					<p>
						Already have an account?{' '}
						<Link className='register-link' to='/login'>
							Sign in
						</Link>
					</p>
					<form onSubmit={handleRegisterval}>
						<input
							ref={loginFirstName}
							className=' register-input'
							type='text'
							placeholder='First name'
						/>
						<input
							ref={loginLastName}
							className='register-input'
							type='text'
							placeholder='Last name'
						/>
						<input
							ref={loginPhone}
							className='register-input'
							type='text'
							placeholder='phone'
              maxLength={9}
              minLength={9}
						/>
						<input
							ref={loginEmail}
							className='register-input'
							type='email'
							placeholder='email'
						/>
						<input
							ref={loginPassword}
							className='register-input'
							type='password'
							placeholder='password'
						/>
						<button type='submit' className='register-btn'>
							Next step
						</button>
					</form>
          </div>
				</div>
			</div>
		</div>
	);
};
