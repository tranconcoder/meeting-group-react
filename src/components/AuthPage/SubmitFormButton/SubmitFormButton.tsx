import React from 'react';

//
import { getClassNameModuleGenerator } from '../../../common/commonMethods';
import { SubmitFormButtonProps } from '../../../types/props';
import styles from './SubmitFormButton.module.scss';

const cx = getClassNameModuleGenerator(styles);

function SubmitFormButton({
	content,
	handleClick,
}: SubmitFormButtonProps) {
	return (
		<button
			className={cx('button')}
			type="button"
			onClick={() => handleClick && handleClick()}
		>
			<p>{content}</p>
		</button>
	);
}

export default SubmitFormButton;
