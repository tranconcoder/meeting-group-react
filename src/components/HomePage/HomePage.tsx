import styles from './HomePage.module.scss';

import classNames from 'classnames/bind';

import { Banner, ImagesSlide, Users } from '../HomePage';

const cx = classNames.bind(styles);

function HomePageComp() {
	return (
		<div className={cx('container')}>
			<Banner />

			<Users />

			<ImagesSlide />
		</div>
	);
}

export default HomePageComp;
