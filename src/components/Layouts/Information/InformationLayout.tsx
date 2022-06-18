import { InformationLayoutProps } from '../../../types/componentsType/InformationLayout';

//@ts-ignore
import { getClassNameModuleGenerator } from '../../common/commonMethods';
import styles from './InformationLayout.module.scss';

const cx = getClassNameModuleGenerator(styles);

function InformationLayout({ LeftSlideBar, ContentBoard }: InformationLayoutProps) {
	return (
		<div className={cx('information-layout')}>
			<div className={cx('left-slide-bar')}>
				<LeftSlideBar />
			</div>

			<div className={cx('content-board')}>
				<ContentBoard />
			</div>
		</div>
	);
}

export default InformationLayout;
