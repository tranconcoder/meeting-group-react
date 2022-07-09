import { memo } from 'react';
import classNames from 'classnames/bind';

import styles from './Profile.module.scss';

import InformationBox from './InformationBox/InformationBox';
import ChangeInfo from './ChangeInfo/ChangeInfo';

const cx = classNames.bind(styles);

function Profile() {
	return (
		<div className={cx('container')}>
			<ChangeInfo />
		</div>
	);
}

export default memo(Profile);
