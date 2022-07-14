import styles from './Social.module.scss';

import classNames from 'classnames/bind';
import Facebook from './Facebook/Facebook';

const cx = classNames.bind(styles);

function Social() {
	return (
		<div className={cx('social-wrapper')}>
			<Facebook />
		</div>
	);
}

export default Social;
