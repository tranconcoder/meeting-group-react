import styles from './ButtonList.module.scss';

import classNames from 'classnames/bind';
import { buttonList } from '../../../../../../config/headerConfig';

const cx = classNames.bind(styles);

function ButtonList() {
	return (
		<ul className={cx('button-panel-list')}>
			{buttonList.map(({ handleClick, Icon, title }, index) => (
				<li key={index} onClick={handleClick}>
					<Icon />
					<span>{title}</span>
				</li>
			))}
		</ul>
	);
}

export default ButtonList;
