import type { SlideBarSelectionList } from '../types/storage/slideBar';

import { HiUserCircle } from 'react-icons/hi';
import { TiHome } from 'react-icons/ti';
import { v4 as uuidv4 } from 'uuid';

const slideBarSelectionList: SlideBarSelectionList = [
	{
		id: uuidv4(),
		title: 'Trang chủ',
		icon: TiHome,
		path: '/',
		handleClick: () => {},
	},
	{
		id: uuidv4(),
		title: 'Thông tin của bạn',
		icon: HiUserCircle,
		path: '/information/profile',
		handleClick: () => {},
	},
];

export default slideBarSelectionList;
