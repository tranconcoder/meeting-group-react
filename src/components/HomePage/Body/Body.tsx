//@ts-ignore
import { getClassNameModuleGenerator } from '../../../common/commonMethods';
import Banner from './Banner/Banner';
import styles from './Body.module.scss';
import Users from './Users/Users';

const cx = getClassNameModuleGenerator(styles);

function HomePageBody() {
	return (
		<div className={cx('container')}>
			<Banner />

			<Users />
		</div>
	);
}

export default HomePageBody;
