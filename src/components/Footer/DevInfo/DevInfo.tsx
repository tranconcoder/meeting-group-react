import styles from './DevInfo.module.scss';
import facebookImage from '../../../images/facebook-64.png';
import googlePlusImage from '../../../images/google-plus-64.png';
import phoneImage from '../../../images/phone-64.png';

import classNames from 'classnames/bind';
import { AddTitle } from '../../Common';

const cx = classNames.bind(styles);

function DevInfo() {
	const OWNER_EMAIL = 'tranvanconkg@gmail.com';
	const SEND_EMAIL_TO_OWNER_URL = `https://mail.google.com/mail/u/0/?to=${OWNER_EMAIL}&fs=1&tf=cm`;
	const OWNER_FACEBOOK_URL = 'https://www.facebook.com/tranvanconkg0/';
	const OWNER_PHONE_NUMBER = '0123456789';

	const handleSendEmailToOwner = () => {
		window.open(SEND_EMAIL_TO_OWNER_URL, '_blank');
	};

	return (
		<div className={cx('dev-info')}>
			<h2 className={cx('title')}>Phát triển bởi</h2>

			<div className={cx('contact-container')}>
				<AddTitle
					className={cx('facebook')}
					parentTag="a"
					href={OWNER_FACEBOOK_URL}
					target="_blank"
					rel="noreferrer"
					title="Truy cập facebook trong tab mới"
				>
					<img src={facebookImage} alt="facebook" />
					<span>Trần Văn Còn</span>
				</AddTitle>

				<AddTitle
					className={cx('google')}
					title="Nhấn để sao chép Email này"
					copyOnClick={OWNER_EMAIL}
					onClick={handleSendEmailToOwner}
				>
					<img src={googlePlusImage} alt="google-plus" />
					<span>{OWNER_EMAIL}</span>
				</AddTitle>

				<AddTitle
					className={cx('phone-number')}
					title="Nhấn để sao chép Số điện thoại này"
					copyOnClick={OWNER_PHONE_NUMBER}
				>
					<img src={phoneImage} alt="phone-number" />
					<span>{OWNER_PHONE_NUMBER}</span>
				</AddTitle>
			</div>
		</div>
	);
}

export default DevInfo;
