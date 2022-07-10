import { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Introduction.module.scss';

const cx = classNames.bind(styles);

function Introduction() {
	return (
		<div className={cx('introduction')}>
			<p>Commodo tempor amet Lorem eu magna.</p>
			<p>
				Cupidatat aliquip pariatur duis in dolor elit ut sint nostrud.
			</p>
			<p>
				Commodo ad id elit duis. Fugiat dolor aliqua voluptate Lorem
				excepteur est minim nulla quis occaecat adipisicing do officia
				exercitation. Officia mollit consequat ex in laboris id.
				Incididunt cupidatat nulla amet duis id.
			</p>
		</div>
	);
}

export default Introduction;
