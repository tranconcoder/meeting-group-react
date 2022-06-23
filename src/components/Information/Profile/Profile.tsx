import { memo } from 'react';
import { getClassNameModuleGenerator } from '../../../common/commonMethods';

import styles from './Profile.module.scss';

import InformationBox from './InformationBox/InformationBox';
import ChangeInfo from './ChangeInfo/ChangeInfo';

const cx = getClassNameModuleGenerator(styles);

function Profile() {
	return (
		<div className={cx('container')}>
			<InformationBox />

			<ChangeInfo />
		</div>
	);
}

export default memo(Profile);
