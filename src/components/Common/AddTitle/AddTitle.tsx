import type { AddTitleProps } from '../../../types/props';

import classNames from 'classnames/bind';

import styles from './AddTitle.module.scss';
import { useRef, useState } from 'react';
import { copyToClipBoard } from '../../../common/commonMethods';

const cx = classNames.bind(styles);

function AddTitle({
	children,
	title,
	onClick,
	copyOnClick = '',
	parentTag = 'div',
	className = '',
	...allAttributes
}: AddTitleProps) {
	const [titleState, setTitleState] = useState(title);
	const [isCopying, setIsCopying] = useState(false);

	const Container = parentTag;

	const handleOnClick = () => {
		onClick && onClick(titleState, setTitleState);

		if (copyOnClick && !isCopying) {
			copyToClipBoard(copyOnClick);

			setIsCopying(true);
			setTitleState('Đã sao chép');

			setTimeout(() => {
				setIsCopying(false);
				setTitleState(title);
			}, 2000);
		}
	};

	return (
		<Container
			className={cx('show-title-wrapper', {
				[className]: className,
			})}
			onClick={handleOnClick}
			{...allAttributes}
		>
			{children}

			<span className={cx('title-box')}>{titleState}</span>
		</Container>
	);
}

export default AddTitle;
