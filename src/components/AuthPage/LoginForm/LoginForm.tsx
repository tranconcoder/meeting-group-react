import styles from './LoginForm.module.scss';
import { MdSwitchAccount } from 'react-icons/md';
import { FaUserLock } from 'react-icons/fa';
import { HiLockClosed } from 'react-icons/hi';

import { getClassNameModuleGenerator } from '../../../common/commonMethods';
import { login } from '../../../redux/slices/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import {
	useAppDispatch,
	useAppSelector,
} from '../../../common/reduxHooks';
import { v4 as uuidv4 } from 'uuid';
import InputForm from '../../Common/InputForm/InputForm';
import SubmitFormButton from '../SubmitFormButton/SubmitFormButton';
import GoogleLoginButton from '../GoogleLoginButton/GoogleLoginButton';

const cx = getClassNameModuleGenerator(styles);

function LoginForm() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [, reRenderComponent] = useState({});

	const navigate = useNavigate();

	const dispatch = useAppDispatch();
	const isLogged = useAppSelector(state => state.auth.isLogged);

	const usernameValidateHandler = useRef<
		(isSubmit: boolean) => any
	>(() => {});
	const passwordValidateHandler = useRef<
		(isSubmit: boolean) => any
	>(() => {});

	const handleSubmitLogin = () => {
		const usernameCheckResult =
			!!usernameValidateHandler.current(true);
		const passwordCheckResult =
			!!passwordValidateHandler.current(true);

		if (usernameCheckResult && passwordCheckResult) {
			dispatch(
				login({
					id: uuidv4(),
					isLogged: true,
					accountType: 'google',
					email: 'tranconcoder@gmail.com',
					username: null,
					fullName: 'Trần Văn Còn',
					avatar: 'https://lh3.googleusercontent.com/ogw/ADea4I5shoTR4FEGvFq0eAbpcVH-FwE9ALF7Flps5uDz=s128-c-mo',
					rank: null,
					className: '12A12',
					sharedUrl: 'https://www.google.com/',
					description: `Officia consequat dolor exercitation cillum sunt commodo aute. Deserunt laborum est commodo consectetur est fugiat voluptate consectetur voluptate exercitation. Cupidatat fugiat eiusmod est nisi ex.\n\nUllamco sint veniam enim cupidatat culpa commodo officia sit dolore non consequat. Laborum quis exercitation magna tempor. Pariatur nulla mollit dolor do magna aliquip fugiat dolor. Tempor commodo laborum cupidatat exercitation eu elit aliqua do eiusmod. Reprehenderit duis labore aute do enim cillum reprehenderit. Nisi Lorem nisi consequat eiusmod magna laborum deserunt laborum cillum culpa. Fugiat culpa Lorem laboris consectetur ad ullamco veniam laboris.`,
				})
			);
		}
	};

	useEffect(() => {
		if (isLogged) {
			navigate('/');
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
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
					getValidateHandler={[
						usernameValidateHandler,
						reRenderComponent,
					]}
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
					getValidateHandler={[
						passwordValidateHandler,
						reRenderComponent,
					]}
				/>

				<SubmitFormButton
					handleClick={handleSubmitLogin}
					content="Đăng nhập"
				/>
			</form>
		</div>
	);
}

export default LoginForm;
