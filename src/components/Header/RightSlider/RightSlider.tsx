import classNames from 'classnames/bind';
import { useAppSelector } from '../../../common/reduxHooks';
import LoginButton from './LoginButton/LoginButton';
import Panel from './Panel/Panel';
import styles from './RightSlider.module.scss';

const cx = classNames.bind(styles);

function RightSlider() {
	const isLogged = useAppSelector(state => state.auth.isLogged);
	const RightSliderElement = isLogged ? Panel : LoginButton;

	return (
		<div className={cx('right-slider')}>
			<RightSliderElement />
		</div>
	);
}

export default RightSlider;
