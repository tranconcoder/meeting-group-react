import classNames from 'classnames/bind';

import CenterSlider from './CenterSlider/CenterSlider';
import styles from './Header.module.scss';
import LeftSlider from './LeftSlider/LeftSlider';
import RightSlider from './RightSlider/RightSlider';

const cx = classNames.bind(styles);

function Header() {
	return (
		<div className={cx('header-wrapper')}>
			<div className={cx('header-container')}>
				<LeftSlider />

				<CenterSlider />

				<RightSlider />
			</div>
		</div>
	);
}

export default Header;
