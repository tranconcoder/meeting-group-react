import styles from './RegisterForm.module.scss';
import { MdPersonAdd } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import { CgRename } from 'react-icons/cg';

import FormikForm from '../../Common/Form/Form';
import {
	emailValidate,
	fullNameValidate,
	getRetypePasswordValidate,
	passwordValidate,
	usernameValidate,
} from '../../../config/validateConfig';
import classNames from 'classnames/bind';
import * as Yup from 'yup';

import SubmitFormButton from '../SubmitFormButton/SubmitFormButton';
import Input from '../../Common/Form/Input/Input';
import { FaUser } from 'react-icons/fa';

const cx = classNames.bind(styles);

function RegisterForm() {
	const formInitialValues = {
		username: '',
		fullName: '',
		email: '',
		password: '',
		retypePassword: '',
	};
	const validationsSchema = Yup.object({
		username: usernameValidate,
		fullName: fullNameValidate,
		email: emailValidate,
		password: passwordValidate,
		retypePassword: getRetypePasswordValidate('password'),
	});

	return (
		<FormikForm
			className={cx('register-form')}
			initialValues={formInitialValues}
			onSubmit={() => console.log('submited')}
			validationSchema={validationsSchema}
		>
			<h3 className={cx('title')}>
				<MdPersonAdd />
				<span>Tạo tài khoản mới</span>
			</h3>

			<div className={cx('input-container')}>
				<Input
					name="username"
					placeholder="Tên đăng nhập..."
					Icon={FaUser}
				/>

				<Input
					name="email"
					placeholder="Địa chỉ email..."
					Icon={HiOutlineMail}
				/>

				<Input
					name="fullName"
					placeholder="Họ và tên..."
					Icon={CgRename}
				/>

				<Input
					name="password"
					type="password"
					placeholder="Mật khẩu..."
					Icon={RiLockPasswordLine}
				/>

				<Input
					name="retypePassword"
					type="password"
					placeholder="Xác nhận mật khẩu..."
					Icon={RiLockPasswordLine}
				/>
			</div>

			<SubmitFormButton content="Tạo tài khoản" />
		</FormikForm>
	);
}

export default RegisterForm;
