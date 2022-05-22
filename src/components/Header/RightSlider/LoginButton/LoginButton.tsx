import { HiLogin } from 'react-icons/hi';
import { Link } from 'react-router-dom';

//@ts-ignore
import { getClassNameModuleGenerator } from '../../../../common/commonMethods';
import styles from './LoginButton.module.scss';

const cx = getClassNameModuleGenerator(styles);

function LoginButton() {
	return (
		<Link className={cx('link')} to="/auth">
			<HiLogin />
			<span>Đăng nhập</span>
		</Link>
	);
}

export default LoginButton;
