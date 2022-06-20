//
import { getClassNameModuleGenerator } from '../../../common/commonMethods';
import styles from './LeftSlider.module.scss';

const cx = getClassNameModuleGenerator(styles);

function LeftSlider() {
	return <div className={cx('left-slider')}></div>;
}

export default LeftSlider;
