import { useEffect, useRef, useState } from 'react';

//@ts-ignore
import { getClassNameModuleGenerator } from '../../../common/commonMethods.ts';
import styles from './LoginForm.module.scss';
import { MdSwitchAccount } from 'react-icons/md';
import { FaUserLock } from 'react-icons/fa';
import { HiLockClosed } from 'react-icons/hi';

import InputForm from '../InputForm/InputForm';
import SubmitFormButton from '../SubmitFormButton/SubmitFormButton';
import GoogleLoginButton from '../GoogleLoginButton/GoogleLoginButton';
import { useAppDispatch, useAppSelector } from '../../../common/redexHooks';
import { login } from '../../../redux/slices/auth';
import { useNavigate } from 'react-router-dom';

const cx = getClassNameModuleGenerator(styles);

function LoginForm() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [, reRenderComponent] = useState({});

	const navigate = useNavigate();

	const dispatch = useAppDispatch();
	const isLogged = useAppSelector(state => state.auth.isLogged);

	const usernameValidateHandler = useRef<(isSubmit: boolean) => any>(() => {});
	const passwordValidateHandler = useRef<(isSubmit: boolean) => any>(() => {});

	const handleSubmitLogin = () => {
		const usernameCheckResult = !!usernameValidateHandler.current(true);
		const passwordCheckResult = !!passwordValidateHandler.current(true);

		if (usernameCheckResult && passwordCheckResult) {
			dispatch(
				login({
					isLogged: true,
					accountType: 'google',
					email: 'tranconcoder@gmail.com',
					username: null,
					fullName: 'Trần Văn Còn',
					avatar: 'https://lh3.googleusercontent.com/ogw/ADea4I5shoTR4FEGvFq0eAbpcVH-FwE9ALF7Flps5uDz=s64-c-mo',
					rank: null,
					className: null,
				})
			);
		}
	};

	useEffect(() => {
		if (isLogged) {
			navigate('/');
		}
	}, [isLogged]);

	return (
		<div className={cx('login-form')}>
			<h3 className={cx('title')}>
				<MdSwitchAccount />
				<span>Đăng nhập tài khoản</span>
			</h3>

			{/* login with google account */}
			<div className={cx('google-login-container')}>
				<span>Hoặc</span>
				<GoogleLoginButton />
			</div>

			<form className={cx('form')}>
				<InputForm
					state={[username, setUsername]}
					Icon={FaUserLock}
					placeholder="Tên đăng nhập..."
					validates={{ required: true }}
					getValidateHandler={[usernameValidateHandler, reRenderComponent]}
					styles={{ marginTop: 30 }}
				/>

				<InputForm
					toggleVisiblePassword
					styles={{ marginTop: '30px' }}
					state={[password, setPassword]}
					type="password"
					Icon={HiLockClosed}
					placeholder="Mật khẩu..."
					validates={{
						required: true,
					}}
					getValidateHandler={[passwordValidateHandler, reRenderComponent]}
				/>

				<SubmitFormButton handleClick={handleSubmitLogin} content="Đăng nhập" />
			</form>
		</div>
	);
}

export default LoginForm;
