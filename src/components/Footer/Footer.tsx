import styles from './Footer.module.scss';

import classNames from 'classnames/bind';
import DirectoryList from './Directory/Directory';
import DevInfo from './DevInfo/DevInfo';

const cx = classNames.bind(styles);

function Footer() {
	return (
		<div className={cx('footer')}>
			<DirectoryList />

			<DevInfo />
		</div>
	);
}

export default Footer;
