import { FaLongArrowAltRight } from 'react-icons/fa';

import classNames from 'classnames/bind';

import thumb from '../../../images/home-thumb.svg';
import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

function Banner() {
	return (
		<div className={cx('banner-container')}>
			<div
				className={cx('thumb-container')}
				data-aos="fade-up"
				data-aos-duration="800"
			>
				<img src={thumb} alt="" />

				<div className={cx('background-layer')}></div>
			</div>

			<div
				className={cx('title')}
				data-aos="fade-up"
				data-aos-duration="1600"
			>
				<p>MEETING GROUP</p>
				<p>HỖ TRỢ GIẢNG DẠY</p>
				<p>
					Khám phá ngay <FaLongArrowAltRight />
				</p>
			</div>
		</div>
	);
}

export default Banner;
