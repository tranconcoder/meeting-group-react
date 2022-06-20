import type { ButtonProps } from '../../../types/props';

import { To, useNavigate } from 'react-router-dom';
import { getClassNameModuleGenerator } from '../../../common/commonMethods';

import styles from './Button.module.scss';

const cx = getClassNameModuleGenerator(styles);

function Button({ children, styles, to }: ButtonProps) {
	const navigate = useNavigate();

	const handleNavigate = to ? () => navigate(to as To) : () => {};

	return (
		<button
			onClick={handleNavigate}
			className={cx('button')}
			style={styles}
		>
			<p>{children}</p>
		</button>
	);
}

export default Button;
