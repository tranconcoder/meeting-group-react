import { FaStickyNote } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { HiDownload } from 'react-icons/hi';
import { IoMdEye } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import defaultAvatar from '../../../../images/default-avatar-2.png';
import styles from './InformationBox.module.scss';

import classNames from 'classnames/bind';
import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../common/reduxHooks';
import { setDataToPreview } from '../../../redux/slices/qrCode';

import { CopyButton, QRCode } from '../../Common';
import Title from '../Title/Title';

const cx = classNames.bind(styles);

function InformationBox() {
	let { current: downloadQrAction } = useRef<() => any>();

	const {
		id: userId,
		avatar,
		username,
		fullName,
		email,
		className,
		description,
	} = useAppSelector(state => state.auth);

	const dispatch = useAppDispatch();

	const showPreviewQrCode = () => {
		dispatch(setDataToPreview(avatar || defaultAvatar));
	};
	const getDownloadQrAction = (downloadAction: () => any) => {
		downloadQrAction = downloadAction;
	};

	return (
		<section className={cx('profile-information')}>
			<Title
				tag="h2"
				content="Thông tin tài khoản"
				icon={{
					src: FiUser,
					scale: 1.2,
					style: { marginRight: 4 },
				}}
				style={{ alignItems: 'flex-start' }}
			/>

			<div className={cx('container')}>
				<div className={cx('information')}>
					<h2 className={cx('full-name')}>{fullName}</h2>

					<div className={cx('id-wrapper')}>
						<span className={cx('id')}>{userId}</span>
						<CopyButton content={userId || ''} duration={3000} />
					</div>

					<div className={cx('email-wrapper')}>
						<MdEmail />
						<span>{email}</span>
					</div>

					<div className={cx('class-name-wrapper')}>
						<FaStickyNote />
						<span>{className}</span>
					</div>

					<div className={cx('description-wrapper')}>
						<pre>{description}</pre>
					</div>
				</div>

				<div className={cx('qr-code-wrapper')}>
					<QRCode
						style={{
							background: '#fff',
							padding: '10px',
							borderRadius: '10px',
						}}
						getDownloadAction={getDownloadQrAction}
						size={128}
						value={avatar || defaultAvatar}
					/>

					<IoMdEye
						className={cx('preview-button')}
						onClick={showPreviewQrCode}
					/>

					<HiDownload
						onClick={() => downloadQrAction && downloadQrAction()}
						className={cx('download-button')}
					/>
				</div>

				<div className={cx('avatar')}>
					<img
						src={avatar || defaultAvatar}
						alt={username || 'user-avatar'}
					/>
				</div>
			</div>
		</section>
	);
}

export default InformationBox;
