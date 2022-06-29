import { useState } from 'react';

import { useNavigate } from 'react-router';

//
import classNames from 'classnames/bind';
import styles from './AuthPage.module.scss';
import { IoMdArrowRoundBack } from 'react-icons/io';
import thumbnails from '../../images/auth-form-left-slide-thumb-2.svg';

import LoginForm from '../../components/AuthPage/LoginForm/LoginForm';
import RegisterForm from '../../components/AuthPage/RegisterForm/RegisterForm';

import type { LoginOrRegisterProps } from '../../types/state';

const cx = classNames.bind(styles);

function AuthPage() {
	const navigate = useNavigate();

	const [loginOrRegister, setLoginOrRegister] =
		useState<LoginOrRegisterProps>('login');

	return (
		<div className={cx('wrapper')}>
			{/* Left slide */}
			<div className={cx('left-slide')}>
				<IoMdArrowRoundBack
					className={cx('back-to-home-button')}
					onClick={() => navigate(-1)}
				/>
				<img src={thumbnails} alt="illustration-img" />
			</div>

			{/* Right slide */}
			<div className={cx('right-slide')}>
				{/* Body */}
				<div className={cx('body')}>
					{loginOrRegister === 'login' ? (
						<LoginForm />
					) : (
						<RegisterForm />
					)}
				</div>

				{/* Footer */}
				<div className={cx('footer')}>
					{/* Login button */}
					<button
						className={cx(loginOrRegister === 'login' && 'active')}
						onClick={() => setLoginOrRegister('login')}
					>
						Đăng nhập
					</button>

					{/* Register button */}
					<button
						className={cx(
							loginOrRegister === 'register' && 'active'
						)}
						onClick={() => setLoginOrRegister('register')}
					>
						Tạo tài khoản
					</button>
				</div>
			</div>
		</div>
	);
}

export default AuthPage;
