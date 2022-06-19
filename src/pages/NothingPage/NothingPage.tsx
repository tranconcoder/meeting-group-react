import { Link, useNavigate } from 'react-router-dom';

//@ts-ignore
import { getClassNameModuleGenerator } from '../../common/commonMethods';
import styles from './NothingPage.module.scss';

import nothingBackground from '../../images/nothing-page/nothing-background.svg';
import { TiArrowLeft } from 'react-icons/ti';

const cx = getClassNameModuleGenerator(styles);

function NothingPage() {
	const navigate = useNavigate();

	const backToPreviousPage = () => navigate(-1);

	return (
		<div
			className={cx('nothing-page')}
			data-aos="fade-up"
			data-aos-delay="200"
		>
			<img src={nothingBackground} alt="error-404-background" />

			<div className={cx('text-box')}>
				<h1>Trang này không tồn tại!</h1>

				<a onClick={backToPreviousPage}>
					<TiArrowLeft />
					<span>Quay lại</span>
				</a>
			</div>
		</div>
	);
}

export default NothingPage;
