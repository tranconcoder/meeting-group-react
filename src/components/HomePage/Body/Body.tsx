//@ts-ignore
import { getClassNameModuleGenerator } from '../../../common/commonMethods';
import Banner from './Banner/Banner';
import styles from './Body.module.scss';
import ImagesSlide from './ImagesSlide/ImagesSlide';
import Users from './Users/Users';

const cx = getClassNameModuleGenerator(styles);

function HomePageBody() {
	return (
		<div className={cx('container')}>
			<Banner />

			<Users />

			<ImagesSlide />
		</div>
	);
}

export default HomePageBody;
