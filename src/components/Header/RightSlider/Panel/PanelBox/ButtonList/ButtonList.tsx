import type { PanelButton } from '../../../../../../types/componentsType/PanelBox';

import styles from './ButtonList.module.scss';
import { FiBell, FiMessageSquare } from 'react-icons/fi';
import { BiTable } from 'react-icons/bi';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ButtonList() {
	const buttonPanelList: PanelButton[] = [
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

	return (
		<ul className={cx('button-panel-list')}>
			{buttonPanelList.map(({ handleClick, Icon, title }, index) => (
				<li key={index} onClick={handleClick}>
					<Icon />
					<span>{title}</span>
				</li>
			))}
		</ul>
	);
}

export default ButtonList;
