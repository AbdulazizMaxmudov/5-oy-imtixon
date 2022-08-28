import { useRef } from 'react';
import axios from 'axios';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import './login.css';
import LoginImage from '../../assets/image/login.png'
export const Login = () => {
	const loginEmail = useRef();
	const loginPassord = useRef();
	const { token, setToken } = useAuth();
	const handleLoginVal = (evt) => {
		evt.preventDefault();
		console.log(loginEmail.current.value);
		console.log(loginPassord.current.value);

		axios
			.post('https://book-service-layer.herokuapp.com/user/login', {
				email: loginEmail.current.value,
				password: loginPassord.current.value,
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
		<div className='login'>
			<div className='login__page'>
				<div className='login__page-img'>
          <img src={LoginImage} alt="Login image" />
        </div>
				<div className='login-form'>
            <div className='login__form-text'>
            <h1>Sign in </h1>
						<p>
              Do not you have an account?
							<span>
              <Link className='login__link' to='/register'>
								Sign up
							</Link>
              </span>
						</p>
            </div>
            <form onSubmit={handleLoginVal} className='form__block'>
						<input
							ref={loginEmail}
							className='login__input'
							type='email'
							placeholder='email'
						/>
						<input
							ref={loginPassord}
							className='login__input'
							type='password'
							placeholder='password'
						/>
						<button type='submit' className='login__btn'>
            Next step
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
