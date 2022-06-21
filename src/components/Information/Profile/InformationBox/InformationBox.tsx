import { getClassNameModuleGenerator } from '../../../../common/commonMethods';
import { useAppSelector } from '../../../../common/reduxHooks';
import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

import styles from './InformationBox.module.scss';
import { RiFileCopyFill, RiFileCopyLine } from 'react-icons/ri';
import defaultAvatar from '../../../../images/default-avatar-2.png';

const cx = getClassNameModuleGenerator(styles);

function InformationBox() {
	const [copied, setCopied] = useState(false);
	const {
		username,
		avatar,
		fullName,
		id: userId,
	} = useAppSelector(state => state.auth);

	const handleCopyUserId = () => {
		navigator.clipboard.writeText(userId);
		setCopied(true);

		setTimeout(() => setCopied(false), 3000);
	};

	return (
		<section className={cx('profile-information')}>
			<h2>Thông tin tài khoản</h2>

			<div className={cx('container')}>
				<div className={cx('information')}>
					<h2 className={cx('full-name')}>{fullName}</h2>

					<p className={cx('id-wrapper')}>
						<span className={cx('id')}>{userId}</span>

						<span
							className={cx('copy-icon-wrapper', {
								copied,
							})}
							onClick={handleCopyUserId}
						>
							<RiFileCopyLine
								className={cx('copy-icon')}
							/>

							<RiFileCopyFill
								className={cx('copied-icon')}
							/>

							<p className={cx('title')}>
								{copied
									? 'Đã sao chép'
									: 'Nhấn để sao chép'}
							</p>
						</span>
					</p>
				</div>

				<div className={cx('avatar')}>
					<img
						src={avatar || defaultAvatar}
						alt={username || 'user-avatar'}
					/>
				</div>

				<QRCodeSVG value={avatar || ''} />
			</div>
		</section>
	);
}

export default InformationBox;
