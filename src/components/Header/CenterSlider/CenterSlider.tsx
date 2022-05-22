import { Link } from 'react-router-dom';

//@ts-ignore
import { getClassNameModuleGenerator } from '../../../common/commonMethods';
import styles from './CenterSlider.module.scss';

const cx = getClassNameModuleGenerator(styles);

function CenterSlider() {
	const tabList = [
		{
			title: 'Trang chủ',
			linkTo: '/',
		},
		{
			title: 'Tin tức',
			linkTo: '/news',
		},
		{
			title: 'Công cụ',
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
