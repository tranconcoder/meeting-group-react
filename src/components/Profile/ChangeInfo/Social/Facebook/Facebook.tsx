import styles from './Facebook.module.scss';

import classNames from 'classnames/bind';
import { MdModeEdit } from 'react-icons/md';
import { RiFacebookFill } from 'react-icons/ri';
import {
	useAppDispatch,
	useAppSelector,
} from '../../../../../common/reduxHooks';
import { IoMdSave } from 'react-icons/io';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Facebook() {
	const dispatch = useAppDispatch();
	const facebookUrl = useAppSelector(state => state.auth.facebook);
	const [facebookUrlInput, setFacebookUrlInput] = useState(facebookUrl);
	const [inputting, setInputting] = useState(false);

	const toggleInput = () => setInputting(!inputting);

	return (
		<div className={cx('facebook')}>
			<RiFacebookFill className={cx('icon')} />

			{inputting ? (
				<>
					<input
						type="text"
						value={facebookUrlInput}
						onChange={e => setFacebookUrlInput(e.target.value)}
					/>

					<IoMdSave
						className={cx('save-icon')}
						onClick={toggleInput}
					/>
				</>
			) : (
				<>
					<p>{facebookUrlInput}</p>

					<MdModeEdit
						onClick={toggleInput}
						className={cx('edit-icon')}
					/>
				</>
			)}
		</div>
	);
}

export default Facebook;
