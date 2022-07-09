import { Link, To } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './NothingPage.module.scss';

import nothingBackground from '../../images/nothing-page/nothing-background.svg';
import { TiArrowLeft } from 'react-icons/ti';

const cx = classNames.bind(styles);

function NothingPage() {
	return (
		<div
			className={cx('nothing-page')}
			data-aos="fade-up"
			data-aos-delay="200"
		>
			<img src={nothingBackground} alt="error-404-background" />

			<div className={cx('text-box')}>
				<h1>Trang này không tồn tại!</h1>

				<Link to={-1 as To} replace>
					<TiArrowLeft />
					<span>Quay lại</span>
				</Link>
			</div>
		</div>
	);
}

export default NothingPage;
