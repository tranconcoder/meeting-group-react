import { Link } from 'react-router-dom';

//@ts-ignore
import { getClassNameModuleGenerator } from '../../common/commonMethods';
import styles from './NothingPage.module.scss';

import nothingBackground from '../../images/nothing-page/nothing-background.svg';
import { TiArrowLeft } from 'react-icons/ti';

const cx = getClassNameModuleGenerator(styles);

function NothingPage() {
	return (
		<div className={cx('nothing-page')} data-aos="fade-up" data-aos-delay="200">
			<img src={nothingBackground} alt="error-404-background" />

			<div className={cx('text-box')}>
				<h1>Trang này không tồn tại!</h1>

				<Link to="/">
					<TiArrowLeft />
					<span>Chuyển tới trang chủ</span>
				</Link>
			</div>
		</div>
	);
}

export default NothingPage;
