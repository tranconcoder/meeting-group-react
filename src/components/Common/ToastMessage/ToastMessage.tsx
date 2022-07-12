import styles from './ToastMessage.module.scss';

import classNames from 'classnames/bind';
import { useAppDispatch, useAppSelector } from '../../../common/reduxHooks';
import {
	deleteAllMessage,
	hideAllMessage,
} from '../../../redux/slices/toastMessage';
import { sleep } from '../../../common/commonMethods';

import MessageItem from './MessageItem/MessageItem';

const cx = classNames.bind(styles);

function ToastMessage() {
	const messageList = useAppSelector(state => state.toastMessage);
	const dispatch = useAppDispatch();

	const handleDeleteAllMessage = async () => {
		dispatch(hideAllMessage());

		await sleep(500);

		dispatch(deleteAllMessage());
	};

	if (messageList.length === 0) return null;

	return (
		<div className={cx('toast-message')}>
			<ul className={cx('message-list')}>
				{messageList.map(message => (
					<MessageItem {...message} key={message.id} />
				))}
			</ul>

			<button
				className={cx('delete-all-message-button')}
				onClick={handleDeleteAllMessage}
			>
				Xóa tất cả
			</button>
		</div>
	);
}

export default ToastMessage;
