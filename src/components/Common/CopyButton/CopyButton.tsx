import type { CopyButtonProps } from '../../../types/props';

import { RiFileCopyFill, RiFileCopyLine } from 'react-icons/ri';
import styles from './CopyButton.module.scss';

import classNames from 'classnames/bind';
import { Dispatch, SetStateAction, useState } from 'react';
import { AddTitle } from '../';

const cx = classNames.bind(styles);

function CopyButton({ duration = 1000, content }: CopyButtonProps) {
	const [isCopied, setIsCopied] = useState<boolean>(false);

	const copyTitle = 'Nhấn để sao chép';
	const copiedTitle = 'Đã sao chép!';

	const handleCopy = (
		title: string,
		setTitle: Dispatch<SetStateAction<string>>
	) => {
		// Set copied style
		setIsCopied(true);
		setTitle(copiedTitle);

		// Copy to clipboard
		navigator.clipboard.writeText(content);

		// Reset to copy style on 3000ms
		setTimeout(() => {
			setIsCopied(false);
			setTitle(copyTitle);
		}, duration);
	};

	return (
		<AddTitle title={copyTitle} onClick={handleCopy}>
			<RiFileCopyLine
				className={cx('copy-icon', {
					visible: !isCopied,
				})}
			/>

			<RiFileCopyFill
				className={cx('copied-icon', {
					visible: isCopied,
				})}
			/>
		</AddTitle>
	);
}

export default CopyButton;
