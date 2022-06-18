import { useNavigate } from 'react-router-dom';

//@ts-ignore
import { getClassNameModuleGenerator } from '../../../common/commonMethods';
import { ButtonProps } from '../../../types/props';
import styles from './Button.module.scss';

const cx = getClassNameModuleGenerator(styles);

function Button({ children, styles, to }: ButtonProps) {
	const navigate = useNavigate();

	const handleNavigate = to ? () => navigate(to) : () => {};

	return (
		<button onClick={handleNavigate} className={cx('button')} style={styles}>
			<p>{children}</p>
		</button>
	);
}

export default Button;
