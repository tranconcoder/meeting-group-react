import type { SlideBarSelectionList } from '../types/storage/slideBar';

import { BiHome } from 'react-icons/bi';
import { FaRegUserCircle } from 'react-icons/fa';

const slideBarSelectionList: SlideBarSelectionList = [
	{
		title: 'Trang chủ',
		icon: BiHome,
		path: '/',
		handleClick() {
			console.log(1);
		},
	},
	{
		title: 'Thông tin của bạn',
		icon: FaRegUserCircle,
		path: '/information/profile',
		handleClick() {
			console.log(2);
		},
	},
];

export default slideBarSelectionList;
