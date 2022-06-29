//
import classNames from 'classnames/bind';
import styles from './LeftSlider.module.scss';

const cx = classNames.bind(styles);

function LeftSlider() {
	return <div className={cx('left-slider')}></div>;
}

export default LeftSlider;
