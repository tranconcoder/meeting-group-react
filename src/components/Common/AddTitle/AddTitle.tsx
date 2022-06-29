import type { AddTitleProps } from '../../../types/props';

import classNames from 'classnames/bind';

import styles from './AddTitle.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function AddTitle({ children, title, onClick }: AddTitleProps) {
	const [titleState, setTitleState] = useState(title);

	const handleOnClick = () => {
		onClick && onClick(titleState, setTitleState);
	};

	return (
		<div className={cx('show-title-wrapper')} onClick={handleOnClick}>
			{children}

			<span className={cx('title-box')}>{titleState}</span>
		</div>
	);
}

export default AddTitle;
