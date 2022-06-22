import type { AddTitleProps } from '../../../types/props';

import { getClassNameModuleGenerator } from '../../../common/commonMethods';

import styles from './AddTitle.module.scss';
import { useState } from 'react';

const cx = getClassNameModuleGenerator(styles);

function AddTitle({ children, title, onClick }: AddTitleProps) {
	const [titleState, setTitleState] = useState(title);

	const handleOnClick = () => {
		onClick && onClick(titleState, setTitleState);
	};

	return (
		<div
			className={cx('show-title-wrapper')}
			onClick={handleOnClick}
		>
			{children}

			<span className={cx('title-box')}>{titleState}</span>
		</div>
	);
}

export default AddTitle;
