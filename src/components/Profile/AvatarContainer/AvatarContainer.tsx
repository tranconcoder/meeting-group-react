import type { FormatImageOptions } from '../../../types/common';

import { FiDownload, FiEdit } from 'react-icons/fi';
import defaultAvatar from '../../../images/default-avatar-512.png';
import styles from './AvatarContainer.module.scss';

import classNames from 'classnames/bind';
import { ChangeEvent, useEffect, useId, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../common/reduxHooks';
import { v4 as uuidv4 } from 'uuid';
import { downloadFile, formatImage } from '../../../common/commonMethods';
import { addMessage } from '../../../redux/slices/toastMessage';

import { Button } from '../../Common';
import { HiDownload } from 'react-icons/hi';
import { FaDownload, FaEdit } from 'react-icons/fa';
import { RiImageEditFill } from 'react-icons/ri';

const cx = classNames.bind(styles);

function AvatarContainer() {
	const username = useAppSelector(state => state.auth.username) || '';
	const [avatar, setAvatar] = useState(defaultAvatar);
	const dispatch = useAppDispatch();

	const avatarInputFileId = useId();

	const handelChangeAvatar = async (e: ChangeEvent<HTMLInputElement>) => {
		// Get image file info
		const target = e.target;
		const files = target.files as FileList;
		const imageFile = files[0];
		const fileExtension =
			(imageFile && imageFile.name.split('.').pop()) || '';

		const ACCEPT_FILE = ['png', 'jpg', 'jpeg', 'svg'];

		// Validate image file
		const getAddErrorMessageAction = (content: string) => {
			return addMessage({
				id: uuidv4(),
				state: 'creating',
				type: 'warning',
				title: 'Không thể dùng ảnh này!',
				content,
				duration: 7000,
			});
		};

		if (!imageFile) {
			target.value = '';

			return dispatch(
				getAddErrorMessageAction('Không thể nhận diện ảnh này.')
			);
		}

		if (!ACCEPT_FILE.includes(fileExtension)) {
			target.value = '';

			return dispatch(
				getAddErrorMessageAction(
					`Chỉ được sử dụng ảnh có đuôi là ${ACCEPT_FILE.join(', ')}.`
				)
			);
		}

		if (imageFile.size > 5 * 1024 * 1024) {
			target.value = '';

			return dispatch(
				getAddErrorMessageAction(
					'Dung lượng ảnh không được vượt quá 10MB. '
				)
			);
		}

		// Format image
		const imageUrl = URL.createObjectURL(imageFile);
		const formatImageOptions: FormatImageOptions = {
			maxWidth: 200,
			maxHeight: 200,
			compressFormat: 'PNG',
			quality: 100,
			rotation: 0,
			minWidth: 100,
			minHeight: 100,
		};

		const imageFormatted = await formatImage(imageUrl, formatImageOptions);

		// Show formatted image on view
		setAvatar(imageFormatted);
	};

	const handleDownloadAvatar = (e: any) => {
		downloadFile(avatar, 'avatar.png');
	};

	const handleResetChangeImage = () => {
		setAvatar(defaultAvatar);
	};

	useEffect(() => {
		return () => {
			if (avatar !== defaultAvatar) URL.revokeObjectURL(avatar);
		};
	}, [avatar]);

	return (
		<section className={cx('avatar-wrapper')}>
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
				{avatar !== defaultAvatar && (
					<>
						<li className={cx('save')}>
							<Button type="warning">Lưu thay đổi</Button>
						</li>

						<li className={cx('reset')}>
							<Button
								type="warning"
								onClick={handleResetChangeImage}
							>
								Chọn ảnh ban đầu
							</Button>
						</li>
					</>
				)}

				<li className={cx('download')}>
					<Button onClick={handleDownloadAvatar}>
						<FaDownload size={14} style={{ marginRight: 10 }} />
						<span>Tải xuống</span>
					</Button>
				</li>

				<li className={cx('change')}>
					<Button
						type="change"
						tagName="label"
						htmlFor={avatarInputFileId}
					>
						<RiImageEditFill
							size={20}
							style={{ marginRight: 10 }}
						/>
						<span>Đổi ảnh</span>
					</Button>
				</li>
			</ul>

			<input
				onChange={handelChangeAvatar}
				type="file"
				name="avatar"
				id={avatarInputFileId}
				style={{ display: 'none' }}
				accept="image/*"
			/>
		</section>
	);
}

export default AvatarContainer;
