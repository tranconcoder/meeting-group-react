import { getClassNameModuleGenerator } from '../../../common/commonMethods';
import { memo } from 'react';

import styles from './Profile.module.scss';

const cx = getClassNameModuleGenerator(styles);

function Profile() {
	return (
		<div className={cx('container')}>
			<section className={cx('profile-information-wrapper')}>
				<h2>Thông tin tài khoản</h2>
			</section>
		</div>
	);
}

export default memo(Profile);
