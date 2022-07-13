import type { DropItemProps } from '../../../../../types/props';

import styles from './DropItem.module.scss';

import classNames from 'classnames/bind';
import { useContext } from 'react';
import { DropListContext } from '../DropList';

const cx = classNames.bind(styles);

function DropItem({ children: label, value }: DropItemProps) {
	const { handleChangeValue, currentValue } = useContext(DropListContext);

	return (
		<li
			className={cx('drop-item', {
				selected: value === currentValue,
			})}
			onClick={() => handleChangeValue(value)}
		>
			{label}
		</li>
	);
}

export default DropItem;
