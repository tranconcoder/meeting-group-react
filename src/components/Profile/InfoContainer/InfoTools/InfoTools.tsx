import styles from './InfoTools.module.scss';

import classNames from 'classnames/bind';
import { Button } from '../../../Common';
import { useContext } from 'react';
import { InfoContainerContext } from '../InfoContainer';

const cx = classNames.bind(styles);

function InfoTools() {
	const { handleSubmitForm, handleResetForm } =
		useContext(InfoContainerContext);

	return (
		<div className={cx('info-tools-wrapper')}>
			<Button className={cx('save-button')} onClick={handleSubmitForm}>
				Lưu thay đổi
			</Button>
			<Button
				onClick={handleResetForm}
				className={cx('reset-button')}
				colorStyle="warning"
				style={{ marginTop: 20 }}
			>
				Lấy giá trị ban đầu
			</Button>
		</div>
	);
}

export default InfoTools;
