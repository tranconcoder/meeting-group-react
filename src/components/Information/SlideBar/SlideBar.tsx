//@ts-ignore
import { getClassNameModuleGenerator } from '../../../common/commonMethods';

import styles from './SlideBar.module.scss';
import { SlideBarSelectionList } from '../../../types/storage/slideBar';

const cx = getClassNameModuleGenerator(styles);

function InformationSlideBar() {
	const renderSlideBarSelectionList = (...args: Array<SlideBarSelectionList>) => {};

	return <div className={cx('slide-bar')}></div>;
}

export default InformationSlideBar;
