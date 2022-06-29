import { GoogleLoginButtonProps } from '../../../types/props';

//
import classNames from 'classnames/bind';
import { BsGoogle } from 'react-icons/bs';
import styles from './GoogleLoginButton.module.scss';

const cx = classNames.bind(styles);

function GoogleLogin({ styles }: GoogleLoginButtonProps) {
	return (
		<div className={cx('google-login-button')} style={styles}>
			<BsGoogle />
			<span>Đăng nhập bằng Google</span>
		</div>
	);
}

export default GoogleLogin;
