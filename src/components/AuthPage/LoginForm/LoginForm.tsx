import styles from './LoginForm.module.scss';
import { MdSwitchAccount } from 'react-icons/md';
import { FaUserLock } from 'react-icons/fa';
import { HiLockClosed } from 'react-icons/hi';

import * as Yup from 'yup';
import classNames from 'classnames/bind';
import { login } from '../../../redux/slices/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../common/reduxHooks';
import { v4 as uuidv4 } from 'uuid';
import {
	passwordValidate,
	usernameValidate,
} from '../../../config/validateConfig';

import SubmitFormButton from '../SubmitFormButton/SubmitFormButton';
import GoogleLoginButton from '../GoogleLoginButton/GoogleLoginButton';
import FormikForm from '../../Common/Form/Form';
import Input from '../../Common/Form/Input/Input';

const cx = classNames.bind(styles);

function LoginForm() {
	const formInitValues = {
		username: '',
		password: '',
	};
	const formValidationsSchema = Yup.object({
		username: usernameValidate,
		password: passwordValidate,
	});

	const navigate = useNavigate();

	const dispatch = useAppDispatch();
	const isLogged = useAppSelector(state => state.auth.isLogged);

	const handleSubmitLogin = () => {
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
	};

	useEffect(() => {
		if (isLogged) navigate('/');

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLogged]);

	return (
		<FormikForm
			initialValues={formInitValues}
			onSubmit={handleSubmitLogin}
			validationSchema={formValidationsSchema}
			className={cx('form')}
		>
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

				<Input
					name="username"
					Icon={FaUserLock}
					placeholder="Tên đăng nhập..."
				/>

				<Input
					name="password"
					type="password"
					Icon={HiLockClosed}
					placeholder="Mật khẩu..."
				/>

				<SubmitFormButton content="Đăng nhập" />
			</div>
		</FormikForm>
	);
}

export default LoginForm;
