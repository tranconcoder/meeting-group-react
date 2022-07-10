import type { InformationLayoutProps } from '../../../types/componentsType/InformationLayout';

import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './InformationLayout.module.scss';
import { TiChevronLeft } from 'react-icons/ti';

import { SlideBar } from '../../Information';

const cx = classNames.bind(styles);

function InformationLayout({ ContentBoard }: InformationLayoutProps) {
	const [hideSlideBar, setHideSlideBar] = useState(false);
	const [titleContent, setTitleContent] = useState('');

	const handleToggleSlideBar = () => {
		setHideSlideBar(!hideSlideBar);
		setTitleContent('');
	};

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
					<SlideBar
						setTitleContent={setTitleContent}
						titleContent={titleContent}
					/>
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
