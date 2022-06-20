import { Fragment } from 'react';
import { Layout1Props } from '../../types/props';

import Header from '../Header/Header';

//
import { getClassNameModuleGenerator } from '../../common/commonMethods';
import styles from './Layout1.module.scss';

const cx = getClassNameModuleGenerator(styles);

function Layout1({ Body }: Layout1Props) {
	return (
		<Fragment>
			<Header />

			<div className={cx('body-container')}>
				<Body />
			</div>
		</Fragment>
	);
}

export default Layout1;
