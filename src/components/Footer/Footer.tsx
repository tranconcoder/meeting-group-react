import styles from './Footer.module.scss';

import classNames from 'classnames/bind';
import DirectoryList from './Directory/Directory';
import DevInfo from './DevInfo/DevInfo';
import Introduction from './Introduction/Introduction';

const cx = classNames.bind(styles);

function Footer() {
	return (
		<div className={cx('footer')}>
			<DirectoryList />

			<div className={cx('dev-and-web-introduction')}>
				<DevInfo />

				<Introduction />
			</div>
		</div>
	);
}

export default Footer;
