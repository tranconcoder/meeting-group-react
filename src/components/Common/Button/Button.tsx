import type { ButtonProps } from '../../../types/props';

import { To, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
	children,
	to,
	type = 'normal-blue',
	...allAttributes
}: ButtonProps) {
	const navigate = useNavigate();

	const handleNavigate = to ? () => navigate(to as To) : () => {};

	return (
		<button
			{...allAttributes}
			className={cx('button', type)}
			onClick={handleNavigate}
		>
			<p>{children}</p>
		</button>
	);
}

export default Button;
