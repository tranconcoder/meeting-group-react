import type {
	InformationSlideBarProps,
	TimeoutOrNull,
} from '../../../../types/componentsType/InformationSlideBar';
import type { SlideBarSelectionList } from '../../../../types/storage/slideBar';

import styles from './SlideBar.module.scss';

import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import slideBarSelectionList from '../../../../storage/informationSlideBar';

const cx = classNames.bind(styles);

function InformationSlideBar({
	titleContent,
	setTitleContent,
}: InformationSlideBarProps) {
	const navigate = useNavigate();

	let { current: setTitleTimeoutId } = useRef<TimeoutOrNull>(null);

	let { current: blurTimeoutId } = useRef<TimeoutOrNull>(null);

	const [slideActived, setSlideActived] = useState(
		slideBarSelectionList[0].id
	);

	const handleOnMouseEnter = (selectionTitle: string) => {
		clearTimeout(blurTimeoutId as NodeJS.Timeout);
		blurTimeoutId = null;

		if (titleContent) {
			setTitleContent(selectionTitle);
		} else {
			setTitleTimeoutId = setTimeout(() => {
				setTitleContent(selectionTitle);
			}, 800);
		}
	};

	const handleOnMouseLeave = () => {
		clearTimeout(setTitleTimeoutId as NodeJS.Timeout);
		setTitleTimeoutId = null;

		blurTimeoutId = setTimeout(() => {
			setTitleContent('');
		}, 1000);
	};

	const renderSlideBarSelectionList = (
		...slideSelectionGroupList: Array<SlideBarSelectionList>
	) => {
		// Map and render groups
		return slideSelectionGroupList.map((group, index) => (
			<ul key={index}>
				{group.map(
					({ icon: Icon, id, title, handleClick, path }, index) => (
						<li
							key={index}
							onMouseEnter={() => handleOnMouseEnter(title)}
							onMouseLeave={handleOnMouseLeave}
							onClick={() => {
								setSlideActived(id);
								path &&
									navigate(path, {
										replace: true,
									});
								handleClick && handleClick();
							}}
							className={cx({
								active: slideActived === id,
							})}
						>
							<Icon />
						</li>
					)
				)}
			</ul>
		));
	};

	return (
		<div className={cx('slide-bar')}>
			{renderSlideBarSelectionList(slideBarSelectionList)}
		</div>
	);
}

export default InformationSlideBar;
