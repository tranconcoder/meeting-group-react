import type { SlideBarSelectionList } from '../../../types/storage/slideBar';

import { useNavigate } from 'react-router-dom';
import { getClassNameModuleGenerator } from '../../../common/commonMethods';
import slideBarSelectionList from '../../../storage/informationSlideBar';

import styles from './SlideBar.module.scss';
import { useState } from 'react';

const cx = getClassNameModuleGenerator(styles);

function InformationSlideBar() {
	const navigate = useNavigate();

	const [slideActived, setSlideActived] = useState(
		slideBarSelectionList[0].id
	);

	const renderSlideBarSelectionList = (
		...slideSelectionGroupList: Array<SlideBarSelectionList>
	) => {
		// Map and render groups
		return slideSelectionGroupList.map((group, index) => (
			<ul key={index}>
				{group.map(({ icon: Icon, id, handleClick, path }, index) => (
					<li
						key={index}
						onClick={() => {
							setSlideActived(id);
							path && navigate(path);
							handleClick && handleClick();
						}}
						className={cx({
							active: slideActived === id,
						})}
					>
						<Icon />
					</li>
				))}
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
