import type { InformationPageProfileTitleProps } from '../../../types/props';

import { BiMessageSquareEdit } from 'react-icons/bi';
import styles from './Profile.module.scss';

import classNames from 'classnames/bind';
import { memo } from 'react';

import AvatarContainer from './AvatarContainer/AvatarContainer';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Title from './Title/Title';

const cx = classNames.bind(styles);

function Profile() {
	const titleProps: InformationPageProfileTitleProps = {
		content: 'Thay đổi thông tin',
		icon: {
			src: BiMessageSquareEdit,
			scale: 1.2,
			style: { marginRight: 4 },
		},
		style: { alignItems: 'flex-start' },
	};

	return (
		<div className={cx('container')}>
			<Title {...titleProps} />

			<AvatarContainer />

			<ChangeInfo />
		</div>
	);
}

export default memo(Profile);
