import { HiLogin } from 'react-icons/hi';
import { Link } from 'react-router-dom';

//
import classNames from 'classnames/bind';
import styles from './LoginButton.module.scss';

const cx = classNames.bind(styles);

function LoginButton() {
	return (
		<Link className={cx('link')} to="/auth">
			<HiLogin />
			<span>Đăng nhập</span>
		</Link>
	);
}

export default LoginButton;
