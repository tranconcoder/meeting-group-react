//@ts-ignore
import { useNavigate } from 'react-router-dom';
import { getClassNameModuleGenerator } from '../../../common/commonMethods';

import slideBarSelectionList from '../../../storage/informationSlideBar';

import type { SlideBarSelectionList } from '../../../types/storage/slideBar';

import styles from './SlideBar.module.scss';

const cx = getClassNameModuleGenerator(styles);

function InformationSlideBar() {
	const navigate = useNavigate();

	const renderSlideBarSelectionList = (
		...slideSelectionGroupList: Array<SlideBarSelectionList>
	) => {
		// Map and render groups
		return slideSelectionGroupList.map((group, index) => (
			<ul key={index}>
				{group.map(({ icon: Icon, title, handleClick, path }, index) => (
					<li
						key={index}
						onClick={() => {
							path && navigate(path);
							handleClick && handleClick();
						}}
					>
						{typeof Icon === 'string' ? <img src={Icon} alt={title} /> : <Icon />}
					</li>
				))}
			</ul>
		));
	};

	return (
		<div className={cx('slide-bar')}>{renderSlideBarSelectionList(slideBarSelectionList)}</div>
	);
}

export default InformationSlideBar;
