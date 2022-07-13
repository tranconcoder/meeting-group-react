import { useContext, useState } from 'react';

import classNames from 'classnames/bind';
import { DropListContext } from '../DropList';
import styles from './DropItem.module.scss';

const cx = classNames.bind(styles);

function DropItem() {
	const { currentValueName, valueList } = useContext(DropListContext);

	return <div>{currentValueName}</div>;
}

export default DropItem;
