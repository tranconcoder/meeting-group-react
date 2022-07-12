import defaultAvatar from '../../../../images/default-avatar-512.png';
import styles from './Panel.module.scss';

import classNames from 'classnames/bind';
import { useState } from 'react';
import { useAppSelector } from '../../../../common/reduxHooks';

import PanelBox from './PanelBox/PanelBox';

const cx = classNames.bind(styles);

function Panel() {
	const { fullName, avatar, email } = useAppSelector(state => state.auth);
	const [showBox, setShowBox] = useState(false);

	const toggleBoxVisible = () => setShowBox(!showBox);

	return (
		<button
			className={cx('panel')}
			onBlur={toggleBoxVisible}
			onFocus={toggleBoxVisible}
		>
			<span className={cx('left-slider')}>
				<span className={cx('full-name')}>{fullName}</span>
				<span className={cx('email')}>{email}</span>
			</span>

			<img src={avatar || defaultAvatar} alt={fullName || ''} />

			{/* Panel box */}
			<PanelBox showBox={showBox} />
		</button>
	);
}

export default Panel;
