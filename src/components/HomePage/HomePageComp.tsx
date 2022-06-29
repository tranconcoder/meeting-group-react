import styles from './HomePageComp.module.scss';

import classNames from 'classnames/bind';

import Banner from './Banner/Banner';
import ImagesSlide from './ImagesSlide/ImagesSlide';
import Users from './Users/Users';

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
