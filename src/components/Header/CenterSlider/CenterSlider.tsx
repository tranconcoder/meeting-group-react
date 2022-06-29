import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import routeRoot from '../../../routes/index';

import styles from './CenterSlider.module.scss';

const cx = classNames.bind(styles);

function CenterSlider() {
	const tabList = [
		{
			title: 'Trang chủ',
			linkTo: routeRoot.homePage.fullPath,
		},
		{
			title: 'Thông báo',
			linkTo: '/notify',
		},
		{
			title: 'Tin tức',
			linkTo: '/news',
		},
		{
			title: 'Tính năng',
			linkTo: '/tools',
		},
	];

	return (
		<div className={cx('center-slider')}>
			<ul>
				{tabList.map((tab, index) => (
					<li key={index}>
						<Link to={tab.linkTo}>{tab.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default CenterSlider;
