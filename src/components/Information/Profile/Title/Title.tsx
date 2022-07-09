import styles from './Title.module.scss';

import classNames from 'classnames/bind';
import { InformationPageProfileTitleProps } from '../../../../types/props';
import { CSSProperties } from 'react';
import { FaHome } from 'react-icons/fa';

const cx = classNames.bind(styles);

function Title({
	content,
	tag = 'h2',
	icon = {
		scale: 1,
		src: FaHome,
		style: {},
	},
	style,
}: InformationPageProfileTitleProps) {
	// JSX Element
	const TagName = tag;
	const Icon = icon?.src;

	// CSS
	const styles: CSSProperties = {
		fontSize: 26,
		...style,
	};
	const iconStyle: CSSProperties = {
		fontSize: `${icon?.scale}em`,
		...icon.style,
	};

	return (
		<TagName className={cx('title')} style={styles}>
			{Icon && <Icon style={iconStyle} />}
			{content}
		</TagName>
	);
}

export default Title;
