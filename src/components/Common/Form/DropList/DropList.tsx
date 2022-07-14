import type { DropListContextType } from '../../../../types/context';
import type { DropListProps } from '../../../../types/props';

import styles from './DropList.module.scss';

import classNames from 'classnames/bind';
import { useField } from 'formik';
import { createContext, useEffect, useRef, useState } from 'react';
import { BsFillTriangleFill } from 'react-icons/bs';
import DropItem from './DropItem/DropItem';

const cx = classNames.bind(styles);
const DropListContext = createContext<DropListContextType>({
	name: '',
});

function DropList({
	name,
	labelMap = {},
	children,
	...allAttribute
}: DropListProps) {
	const [expanding, setExpanding] = useState(false);
	const [field, meta, helpers] = useField({ name, type: 'radio' });
	const dropListRef = useRef<HTMLUListElement>(null);

	const label = labelMap[meta.value] || '--- Chọn giá trị ---';
	const hasError = meta.error;

	const handleToggleExpanding = () => {
		setExpanding(!expanding);

		if (expanding) {
			helpers.setValue(meta.value);
		}
	};

	useEffect(() => {
		const dropListElm = dropListRef.current as HTMLUListElement;

		if (expanding) {
			dropListElm.style.maxHeight = `${dropListElm.scrollHeight}px`;
		} else {
			dropListElm.style.maxHeight = '0px';
		}
	});

	return (
		<DropListContext.Provider value={{ name }}>
			<button
				{...allAttribute}
				className={cx('drop-list-wrapper', {
					error: hasError,
				})}
				onClick={handleToggleExpanding}
				type="button"
			>
				<p className={cx('current-value')}>{label}</p>

				<BsFillTriangleFill className={cx('triangle', { expanding })} />
			</button>

			<p
				className={cx('error-message', {
					show: hasError,
				})}
			>
				{meta.error}
			</p>

			<ul
				className={cx('drop-list', { expanding })}
				ref={dropListRef}
				onClick={handleToggleExpanding}
			>
				<DropItem value="">--- Chọn giá trị ---</DropItem>

				{children}
			</ul>
		</DropListContext.Provider>
	);
}

export { DropListContext };
export default DropList;
