import type { InformationPageProfileTitleProps } from '../../../types/props';

import { memo } from 'react';
import classNames from 'classnames/bind';

import styles from './Profile.module.scss';

import InformationBox from './InformationBox/InformationBox';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import AvatarContainer from './AvatarContainer/AvatarContainer';
import Title from './Title/Title';
import { BiMessageSquareEdit } from 'react-icons/bi';

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
