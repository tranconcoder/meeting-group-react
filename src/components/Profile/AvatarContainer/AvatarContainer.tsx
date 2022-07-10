import { FiEdit } from 'react-icons/fi';
import defaultAvatar from '../../../images/default-avatar-2.png';
import styles from './AvatarContainer.module.scss';

import classNames from 'classnames/bind';
import { useAppSelector } from '../../../common/reduxHooks';
import { ChangeEvent, useEffect, useId, useState } from 'react';

import { Button } from '../../Common';

const cx = classNames.bind(styles);

function AvatarContainer() {
	const username = useAppSelector(state => state.auth.username) || '';
	const [avatar, setAvatar] = useState(defaultAvatar);

	const avatarInputFileId = useId();

	const handelChangeAvatar = (e: ChangeEvent<HTMLInputElement>) => {
		const target = e.target;
		const files = target.files as FileList;
		const imageFile = files[0];

		if (
			imageFile.name.endsWith('.png') ||
			imageFile.name.endsWith('.jpg')
		) {
			const imageUrl = URL.createObjectURL(imageFile);

			setAvatar(imageUrl);
		} else {
		}
	};

	useEffect(() => {
		return () => {
			URL.revokeObjectURL(avatar);
		};
	}, [avatar]);

	return (
		<div className={cx('avatar-wrapper')}>
			<label
				className={cx('avatar-container')}
				htmlFor={avatarInputFileId}
			>
				<img className={cx('avatar')} src={avatar} alt={username} />

				<div className={cx('hover-layer')}>
					<FiEdit />
				</div>
			</label>

			<ul className={cx('tool-list')}>
				<li className={cx('download')}>
					<Button type="normal-purple">Tải xuống</Button>
				</li>

				<li className={cx('change')}>
					<Button type="change">Chỉnh sửa</Button>
				</li>
			</ul>

			<input
				onChange={handelChangeAvatar}
				type="file"
				name="avatar"
				id={avatarInputFileId}
				style={{ display: 'none' }}
				accept="image/png, image/jpeg"
			/>
		</div>
	);
}

export default AvatarContainer;
