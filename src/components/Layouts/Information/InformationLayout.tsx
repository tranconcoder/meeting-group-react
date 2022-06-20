import type { InformationLayoutProps } from '../../../types/componentsType/InformationLayout';

import { useState } from 'react';
import { getClassNameModuleGenerator } from '../../../common/commonMethods';
import InformationSlideBar from '../../Information/SlideBar/SlideBar';

import { TiChevronLeft } from 'react-icons/ti';
import styles from './InformationLayout.module.scss';

const cx = getClassNameModuleGenerator(styles);

function InformationLayout({ ContentBoard }: InformationLayoutProps) {
	const [hideSlideBar, setHideSlideBar] = useState(false);
	const [titleContent, setTitleContent] = useState('Hello');

	const handleToggleSlideBar = () => setHideSlideBar(!hideSlideBar);

	return (
		<div className={cx('information-layout')}>
			<div
				className={cx('title-box-container', {
					show: titleContent,
				})}
			>
				<p>{titleContent}</p>
			</div>

			<div
				className={cx('left-slide-bar', {
					hide: hideSlideBar,
				})}
			>
				<div className={cx('container')}>
					<InformationSlideBar />
				</div>

				<button
					className={cx('toggle-slide-bar-button')}
					onClick={handleToggleSlideBar}
				>
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
