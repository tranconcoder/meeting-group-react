import classNames from 'classnames/bind';
import styles from './AvatarContainer.module.scss';
import defaultAvatar from '../../../../images/default-avatar-2.png';
import { useAppSelector } from '../../../../common/reduxHooks';

const cx = classNames.bind(styles);

function AvatarContainer() {
	const username = useAppSelector(state => state.auth.username) || '';

	return (
		<div className={cx('avatar-container')}>
			<img className={cx('avatar')} src={defaultAvatar} alt={username} />
		</div>
	);
}

export default AvatarContainer;
