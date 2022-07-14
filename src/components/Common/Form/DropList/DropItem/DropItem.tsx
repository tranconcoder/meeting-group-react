import type { DropItemProps } from '../../../../../types/props';

import styles from './DropItem.module.scss';

import classNames from 'classnames/bind';
import { Field, FieldProps } from 'formik';
import { useContext } from 'react';
import { FaCheck } from 'react-icons/fa';
import { DropListContext } from '../DropList';

const cx = classNames.bind(styles);

function DropItem({ children: label, value }: DropItemProps) {
	const { name } = useContext(DropListContext);

	return (
		<Field type="radio" name={name} value={value}>
			{({ field, meta }: FieldProps) => {
				const selected = meta.value === value;

				return (
					<li className={cx('drop-item', { selected })}>
						<label>
							<input {...field} type="radio" />

							<p>{label}</p>

							{selected && <FaCheck size={14} />}
						</label>
					</li>
				);
			}}
		</Field>
	);
}

export default DropItem;
