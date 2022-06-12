import { GoogleLoginButtonProps } from '../../../types/props';

//@ts-ignore
import { getClassNameModuleGenerator } from '../../../common/commonMethods';
import { BsGoogle } from 'react-icons/bs';
import styles from './GoogleLoginButton.module.scss';

const cx = getClassNameModuleGenerator(styles);

function GoogleLogin({ styles }: GoogleLoginButtonProps) {
	return (
		<div className={cx('google-login-button')} style={styles}>
			<BsGoogle />
			<span>Đăng nhập bằng Google</span>
		</div>
	);
}

export default GoogleLogin;
