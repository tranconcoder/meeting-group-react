import { useState } from 'react';

//@ts-ignore
import InformationSlideBar from '../../Information/SlideBar/SlideBar';

import { getClassNameModuleGenerator } from '../../../common/commonMethods';
import { InformationLayoutProps } from '../../../types/componentsType/InformationLayout';

import styles from './InformationLayout.module.scss';
import { TiChevronLeft } from 'react-icons/ti';

const cx = getClassNameModuleGenerator(styles);

function InformationLayout({ ContentBoard }: InformationLayoutProps) {
	const [hideSlideBar, setHideSlideBar] = useState(true);

	const handleToggleSlideBar = () => setHideSlideBar(!hideSlideBar);

	return (
		<div className={cx('information-layout')}>
			<div
				className={cx('left-slide-bar', {
					hide: hideSlideBar,
				})}
			>
				<div className={cx('container')}>
					<InformationSlideBar />
				</div>

				<button className={cx('toggle-slide-bar-button')} onClick={handleToggleSlideBar}>
					<TiChevronLeft />
				</button>
			</div>

			<div className={cx('content-board')}>
				<ContentBoard />
			</div>
		</div>
	);
}

export default InformationLayout;
