import styles from './Header.module.scss';

import classNames from 'classnames/bind';

import { LeftSlider, CenterSlider, RightSlider } from '../Header';

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
