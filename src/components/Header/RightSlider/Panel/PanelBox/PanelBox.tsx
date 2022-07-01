import type {
	PanelButton,
	PanelSlide,
} from '../../../../../types/componentsType/PanelBox';
import type { PanelBoxProps } from '../../../../../types/props';

import styles from './PanelBox.module.scss';
import { BiTable } from 'react-icons/bi';
import { FiMessageSquare, FiBell } from 'react-icons/fi';

import classNames from 'classnames/bind';

import SlideList from './SlideList/SlideList';
import ButtonList from './ButtonList/ButtonList';

const cx = classNames.bind(styles);

function PanelBox({ showBox }: PanelBoxProps) {
	return (
		<div className={cx('panel-box', { show: showBox })}>
			<h4 className={cx('button-panel-list-title')}>Menu</h4>

			<ButtonList />

			<SlideList />
		</div>
	);
}

export default PanelBox;
