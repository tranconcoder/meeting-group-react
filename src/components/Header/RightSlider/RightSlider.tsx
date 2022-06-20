//
import { getClassNameModuleGenerator } from '../../../common/commonMethods';
import { useAppSelector } from '../../../common/reduxHooks';
import LoginButton from './LoginButton/LoginButton';
import Panel from './Panel/Panel';
import styles from './RightSlider.module.scss';

const cx = getClassNameModuleGenerator(styles);

function RightSlider() {
	const isLogged = useAppSelector(state => state.auth.isLogged);

	return (
		<div className={cx('right-slider')}>
			{isLogged ? <Panel /> : <LoginButton />}
		</div>
	);
}

export default RightSlider;
