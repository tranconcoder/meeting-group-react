import { useState } from 'react';
import { BiMessageSquareEdit } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';

import { getClassNameModuleGenerator } from '../../../../common/commonMethods';
import { useAppSelector } from '../../../../common/reduxHooks';
import InputForm from '../../../Common/InputForm/InputForm';
import Title from '../Title/Title';
import styles from './ChangeInfo.module.scss';

const cx = getClassNameModuleGenerator(styles);

function ChangeInfo() {
	const [fullName, setFullName] = useState(
		useAppSelector(state => state.auth.fullName) as string
	);

	return (
		<div className={cx('container')}>
			<Title
				tag="h2"
				content="Thay đổi thông tin"
				icon={{
					src: BiMessageSquareEdit,
					scale: 1.2,
					style: { marginRight: 4 },
				}}
				style={{ alignItems: 'flex-start' }}
			/>

			{/* 
			placeholder,
			state,
			Icon,
			type = 'text',
			styles = {},
			toggleVisiblePassword,
			validates,
			getValidateHandler, */}
			<InputForm
				state={[fullName, setFullName]}
				Icon={FaUser}
				placeholder="Tên đăng nhập..."
				validates={{ required: true }}
				styles={{ marginTop: 30 }}
			/>
		</div>
	);
}

export default ChangeInfo;
