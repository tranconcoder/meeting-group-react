import type { Layout1Props } from '../../types/props';

import styles from './Layout1.module.scss';

import classNames from 'classnames/bind';
import { Fragment } from 'react';

import Footer from '../Footer';
import Header from '../Header';

const cx = classNames.bind(styles);

function Layout1({ Body }: Layout1Props) {
	return (
		<Fragment>
			<Header />

			<div className={cx('body-container')}>
				<Body />
			</div>

			<Footer />
		</Fragment>
	);
}

export default Layout1;
