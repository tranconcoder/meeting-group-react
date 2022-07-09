import React from 'react';

import classNames from 'classnames/bind';
import { SubmitFormButtonProps } from '../../../types/props';
import styles from './SubmitFormButton.module.scss';

const cx = classNames.bind(styles);

function SubmitFormButton({
	content,
	handleClick = () => {},
}: SubmitFormButtonProps) {
	return (
		<button className={cx('button')} type="submit" onClick={handleClick}>
			<p>{content}</p>
		</button>
	);
}

export default SubmitFormButton;
