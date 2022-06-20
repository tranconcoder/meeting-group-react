import type { SlideBarSelectionList } from '../types/storage/slideBar';

import { FaRegUserCircle } from 'react-icons/fa';

import { v4 as uuidv4 } from 'uuid';

const slideBarSelectionList: SlideBarSelectionList = [
	{
		id: uuidv4(),
		title: 'Thông tin của bạn',
		icon: FaRegUserCircle,
		path: '/information/profile',
		handleClick: () => {},
	},
];

export default slideBarSelectionList;
