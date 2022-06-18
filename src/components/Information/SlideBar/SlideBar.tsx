//@ts-ignore
import { getClassNameModuleGenerator } from '../../../common/commonMethods';

import styles from './SlideBar.module.scss';
import slideBarLogo from '../../../images/information-slide-bar/logo.png';

const cx = getClassNameModuleGenerator(styles);

function InformationSlideBar() {
	return (
		<div className={cx('slide-bar')}>
			<img src={slideBarLogo} alt="slide-bar" />
		</div>
	);
}

export default InformationSlideBar;
