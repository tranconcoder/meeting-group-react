import { BiMessageSquareEdit } from 'react-icons/bi';

import classNames from 'classnames/bind';
import Title from '../Title/Title';
import styles from './ChangeInfo.module.scss';

const cx = classNames.bind(styles);

function ChangeInfo() {
	return (
		<div className={cx('container')}>
			<Title
				tag="h2"
				content="Thay đổi thông tin"
				icon={{
					src: BiMessageSquareEdit,
					scale: 1.2,
					style: { marginRight: 4 },
				}}
				style={{ alignItems: 'flex-start' }}
			/>
		</div>
	);
}

export default ChangeInfo;