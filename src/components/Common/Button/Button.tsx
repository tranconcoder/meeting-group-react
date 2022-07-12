import type { ButtonProps } from '../../../types/props';

import { To, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
	children,
	tagName = 'button',
	to,
	type = 'normal-blue',
	...allAttributes
}: ButtonProps) {
	const navigate = useNavigate();

	const handleNavigate = to ? () => navigate(to as To) : () => {};

	const Button = tagName;

	return (
		<Button
			{...allAttributes}
			className={cx('button', type)}
			onClick={(e: any) => {
				handleNavigate();
				allAttributes.onClick && allAttributes.onClick(e);
			}}
		>
			<p>{children}</p>
		</Button>
	);
}

export default Button;
