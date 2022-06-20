import type { SlideBarSelectionList } from '../types/storage/slideBar';

import { BiHome } from 'react-icons/bi';
import { FaRegUserCircle } from 'react-icons/fa';

import { v4 as uuidv4 } from 'uuid';
import routeRoot from '../routes/index';

const slideBarSelectionList: SlideBarSelectionList = [
	{
		id: uuidv4(),
		title: 'Trang chủ',
		icon: BiHome,
		path: '/',
		handleClick: () => {},
	},
	{
		id: uuidv4(),
		title: 'Thông tin của bạn',
		icon: FaRegUserCircle,
		path: '/information/profile',
		handleClick: () => {},
	},
];

export default slideBarSelectionList;
