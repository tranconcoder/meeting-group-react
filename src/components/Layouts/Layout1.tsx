import { Fragment } from 'react';
import { Layout1Props } from '../../types/props';

import Header from '../Header/Header';

import classNames from 'classnames/bind';
import styles from './Layout1.module.scss';

const cx = classNames.bind(styles);

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