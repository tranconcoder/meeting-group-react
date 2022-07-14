import type { ToastMessageItemStore } from '../../../../types/initStore';

import { BiCheck } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdOutlineErrorOutline, MdWarningAmber } from 'react-icons/md';
import styles from './MessageItem.module.scss';

import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { sleep } from '../../../../common/commonMethods';
import { useAppDispatch } from '../../../../common/reduxHooks';
import {
	deleteMessage,
	hideMessage,
} from '../../../../redux/slices/toastMessage';

const cx = classNames.bind(styles);

function MessageItem(props: ToastMessageItemStore) {
	const dispatch = useAppDispatch();
	const { id, duration, state, title, content, type } = props;
	const Icon =
		type === 'success'
			? BiCheck
			: type === 'notify'
			? IoMdNotificationsOutline
			: type === 'warning'
			? MdWarningAmber
			: MdOutlineErrorOutline;

	const handleDeleteMessage = async () => {
		dispatch(hideMessage(id));

		await sleep(500);

		dispatch(deleteMessage(id));
	};

	useEffect(() => {
		const timeoutId = setTimeout(handleDeleteMessage, duration);

		return () => clearTimeout(timeoutId);
	}, []); // eslint-disable-line

	return (
		<li className={cx('message-item', type, state)}>
			<FaTimes
				className={cx('close-message')}
				onClick={handleDeleteMessage}
			/>

			<Icon className={cx('message-icon')} />

			<div className={cx('title-and-content')}>
				<h3>{title}</h3>

				<p>{content}</p>
			</div>
		</li>
	);
}

export default MessageItem;
