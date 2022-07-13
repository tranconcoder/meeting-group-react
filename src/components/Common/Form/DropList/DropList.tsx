import type { DropListProps } from '../../../../types/props';

import styles from './DropList.module.scss';

import classNames from 'classnames/bind';
import { createContext } from 'react';

const cx = classNames.bind(styles);
const DropListContext = createContext<DropListProps>({
	valueList: [],
	currentValueName: '',
});

function DropList({ valueList, currentValueName, children }: DropListProps) {
	const currentValue = valueList.find(
		value => value.name === currentValueName
	)?.value;

	return (
		<DropListContext.Provider value={{ valueList, currentValueName }}>
			<div className={cx('drop-list-wrapper')}>
				<p className={cx('current-value')}>{currentValue}</p>
				<ul className={cx('drop-list')}>{children}</ul>
			</div>
		</DropListContext.Provider>
	);
}

export { DropListContext };
export default DropList;
