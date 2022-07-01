import type { PanelButton, PanelSlide } from '../types/componentsType/PanelBox';

import { BiTable } from 'react-icons/bi';
import { FiBell, FiMessageSquare } from 'react-icons/fi';

// Panel list
export const buttonList: PanelButton[] = [
	{
		title: 'Thông báo',
		Icon: FiBell,
	},
	{
		title: 'Tin nhắn',
		Icon: FiMessageSquare,
	},
	{
		title: 'Bảng điểm',
		Icon: BiTable,
	},
];
