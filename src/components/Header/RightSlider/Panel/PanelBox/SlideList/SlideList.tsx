import type { PanelSlide } from '../../../../../../types/componentsType/PanelBox';

import styles from './SlideList.module.scss';
import { IoMdLogOut } from 'react-icons/io';
import { useAppDispatch } from '../../../../../../common/reduxHooks';

import classNames from 'classnames/bind';
import { v4 as uuidv4 } from 'uuid';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserEdit } from 'react-icons/fa';
import { logout } from '../../../../../../redux/slices/auth';
import routeRoot from '../../../../../../routes';
import { TiArrowSortedDown } from 'react-icons/ti';

const cx = classNames.bind(styles);

function SlideList() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [expandedSlideId, setExpandedSlideId] = useState('');

	const slidePanelList = useRef<PanelSlide[]>([
		{
			id: uuidv4(),
			title: 'Sửa thông tin',
			Icon: FaUserEdit,
			handleClick: () =>
				navigate(
					routeRoot.informationPage.childrenRoute.profile.fullPath
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
		<ul className={cx('slide-panel-list')}>
			{slidePanelList.current.map(
				(
					{ title, handleClick: handleOnClick, Icon, childList, id },
					index
				) => {
					if (!childList || childList.length === 0) {
						return (
							<li
								key={index}
								className={cx('single')}
								onClick={stopPropagation(handleOnClick)}
							>
								<Icon />
								<span>{title}</span>
							</li>
						);
					} else {
						return (
							<li key={index} className={cx('multiple')}>
								<div
									className={cx('main-slide')}
									onClick={() =>
										setExpandedSlideId(previousId =>
											previousId === id ? '' : id
										)
									}
								>
									<Icon />
									<span>{title}</span>
									<TiArrowSortedDown />
								</div>

								<ul
									className={cx('child-list-container', {
										expand: expandedSlideId === id,
									})}
								>
									{childList.map(
										(
											{
												title,
												handleClick: handleOnClick,
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
												<span>{title}</span>
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
	);
}

export default SlideList;
