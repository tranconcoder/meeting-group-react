import styles from './DevInfo.module.scss';
import devImage from '../../../images/dev.jpg';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DevInfo() {
	return (
		<div className={cx('dev-info')}>
			<h2 className={cx('title')}>Phát triển bởi</h2>

			<div className={cx('info-container')}>
				<img className={cx('avatar')} src={devImage} alt="" />
			</div>
		</div>
	);
}

export default DevInfo;
