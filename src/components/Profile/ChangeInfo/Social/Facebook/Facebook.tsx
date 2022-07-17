import styles from './Facebook.module.scss';

import classNames from 'classnames/bind';
import { Fragment, useEffect, useRef, useState } from 'react';
import { FiEdit3, FiRotateCcw } from 'react-icons/fi';
import { RiFacebookFill, RiFileCopyLine, RiSaveLine } from 'react-icons/ri';
import {
	useAppDispatch,
	useAppSelector,
} from '../../../../../common/reduxHooks';
import { changeProfile } from '../../../../../redux/slices/auth';
import { CgLogIn } from 'react-icons/cg';
import { AddTitle } from '../../../../Common';

const cx = classNames.bind(styles);

function Facebook() {
	const dispatch = useAppDispatch();
	const facebookUrl = useAppSelector(state => state.auth.facebook);
	const [facebookUrlInput, setFacebookUrlInput] = useState(facebookUrl);
	const [inputting, setInputting] = useState(false);

	const inputRef = useRef<HTMLInputElement>(null);

	const toggleInput = () => setInputting(!inputting);

	const handleClickSaveButton = () => {
		toggleInput();

		dispatch(
			changeProfile({
				facebook: facebookUrlInput,
			})
		);
	};
	const handleClickResetButton = () => {
		setFacebookUrlInput(facebookUrl);
	};
	const handleClickAccessButton = () => {
		window.open(facebookUrl);
	};

	// Focus input when input
	useEffect(() => inputRef.current?.focus(), [inputting]);

	return (
		<div className={cx('facebook')}>
			<RiFacebookFill className={cx('icon')} />

			{inputting ? (
				<Fragment>
					<input
						ref={inputRef}
						type="text"
						value={facebookUrlInput}
						onChange={e => setFacebookUrlInput(e.target.value)}
					/>

					{facebookUrlInput !== facebookUrl && (
						<FiRotateCcw
							className={cx('reset-icon')}
							onClick={handleClickResetButton}
						/>
					)}

					<RiSaveLine
						className={cx('save-icon')}
						onClick={handleClickSaveButton}
					/>
				</Fragment>
			) : (
				<Fragment>
					<p>{facebookUrlInput}</p>

					<CgLogIn
						className={cx('access-icon')}
						onClick={handleClickAccessButton}
					/>

					<AddTitle
						className={cx('copy-icon')}
						copyOnClick={`https://www.facebook.com${facebookUrl}`}
						title="Nhấn để sao chép"
					>
						<RiFileCopyLine className={cx('copy-icon')} />
					</AddTitle>

					<FiEdit3
						onClick={toggleInput}
						className={cx('edit-icon')}
					/>
				</Fragment>
			)}
		</div>
	);
}

export default Facebook;
