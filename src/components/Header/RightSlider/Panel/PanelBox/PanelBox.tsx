import type {
	PanelButton,
	PanelSlide,
} from '../../../../../types/componentsType/PanelBox';
import type { PanelBoxProps } from '../../../../../types/props';

//
import { getClassNameModuleGenerator } from '../../../../../common/commonMethods';
import routeRoot from '../../../../../routes';

import styles from './PanelBox.module.scss';
import { BiTable } from 'react-icons/bi';
import { IoMdLogOut } from 'react-icons/io';
import { FiMessageSquare, FiBell } from 'react-icons/fi';
import { TiArrowSortedDown } from 'react-icons/ti';
import { FaUserEdit } from 'react-icons/fa';

import { useAppDispatch } from '../../../../../common/reduxHooks';
import { v4 as uuidv4 } from 'uuid';
import { useRef, useState } from 'react';
import { logout } from '../../../../../redux/slices/auth';
import { useNavigate } from 'react-router-dom';

const cx = getClassNameModuleGenerator(styles);

function PanelBox({ showBox }: PanelBoxProps) {
	const [expandedSlideId, setExpandedSlideId] = useState('');

	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const buttonPanelList: PanelButton[] = [
		{
			title: 'Thông báo',
			Icon: FiBell,
		},
		{
			title: 'Tin nhắn',
			Icon: FiMessageSquare,
		},
		{
			title: 'Bảng điểm',
			Icon: BiTable,
		},
	];

	const slidePanelList = useRef<PanelSlide[]>([
		{
			id: uuidv4(),
			title: 'Sửa thông tin',
			Icon: FaUserEdit,
			handleClick: () =>
				navigate(
					routeRoot.informationPage.childrenRoute?.profile
						.fullPath || '/'
				),
		},
		{
			id: uuidv4(),
			title: 'Đăng xuất',
			Icon: IoMdLogOut,
			handleClick: () => {
				dispatch(logout());
				navigate(routeRoot.authPage.fullPath);
			},
		},
	]);

	const stopPropagation = (callback: (() => void) | undefined) => {
		if (!callback) {
			return () => {};
		}

		return (e: any) => {
			e.stopPropagation();
			callback();
		};
	};

	return (
		<div className={cx('panel-box', { show: showBox })}>
			{/* Button list wrapper */}
			<h4 className={cx('button-panel-list-title')}>Menu</h4>

			<ul className={cx('button-panel-list')}>
				{buttonPanelList.map(
					({ handleClick, Icon, title }, index) => (
						<li key={index} onClick={handleClick}>
							<Icon />
							<span>{title}</span>
						</li>
					)
				)}
			</ul>

			{/* Slider list wrapper */}
			<ul className={cx('slide-panel-list')}>
				{slidePanelList.current.map(
					(
						{
							title,
							handleClick: handleOnClick,
							Icon,
							childList,
							id,
						},
						index
					) => {
						if (!childList || childList.length === 0) {
							return (
								<li
									key={index}
									className={cx('single')}
									onClick={stopPropagation(
										handleOnClick
									)}
								>
									<Icon />
									<span>{title}</span>
								</li>
							);
						} else {
							return (
								<li
									key={index}
									className={cx('multiple')}
								>
									<div
										className={cx('main-slide')}
										onClick={() =>
											setExpandedSlideId(
												previousId =>
													previousId === id
														? ''
														: id
											)
										}
									>
										<Icon />
										<span>{title}</span>
										<TiArrowSortedDown />
									</div>

									<ul
										className={cx(
											'child-list-container',
											{
												expand:
													expandedSlideId ===
													id,
											}
										)}
									>
										{childList.map(
											(
												{
													title,
													handleClick:
														handleOnClick,
													Icon,
												},
												index
											) => (
												<li
													key={index}
													onClick={stopPropagation(
														handleOnClick
													)}
												>
													<Icon />
													<span>
														{title}
													</span>
												</li>
											)
										)}
									</ul>
								</li>
							);
						}
					}
				)}
			</ul>
		</div>
	);
}

export default PanelBox;
