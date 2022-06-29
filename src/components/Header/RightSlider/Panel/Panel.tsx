//
import classNames from 'classnames/bind';
import { useAppSelector } from '../../../../common/reduxHooks';
import styles from './Panel.module.scss';

import defaultAvatar from '../../../../images/default-avatar-2.png';
import { useState } from 'react';
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

			<img src={avatar || defaultAvatar} alt="" />

			{/* Panel box */}
			<PanelBox showBox={showBox} />
		</button>
	);
}

export default Panel;
