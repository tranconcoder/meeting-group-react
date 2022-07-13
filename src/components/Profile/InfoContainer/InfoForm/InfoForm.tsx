import styles from './InfoForm.module.scss';

import * as Yup from 'yup';
import classNames from 'classnames/bind';
import { Button, FormikForm, Input } from '../../../Common';
import { useAppSelector } from '../../../../common/reduxHooks';
import {
	classListValidate,
	descriptionValidate,
	emailValidate,
	fullNameValidate,
} from '../../../../config/validateConfig';
import rankConfig from '../../../../config/rankConfig';
import { InfoContainerContext } from '../InfoContainer';

import DropList from '../../../Common/Form/DropList/DropList';
import DropItem from '../../../Common/Form/DropList/DropItem/DropItem';
import { useContext, useEffect, useRef } from 'react';

const cx = classNames.bind(styles);

function InfoForm() {
	const fullName = useAppSelector(state => state.auth.fullName);
	const email = useAppSelector(state => state.auth.email);
	const rank = useAppSelector(state => state.auth.rank);
	const classList = useAppSelector(state => state.auth.classList);
	const description = useAppSelector(state => state.auth.description);
	const { setHandleResetForm, setHandleSubmitForm } =
		useContext(InfoContainerContext);

	const buttonRef = useRef<HTMLButtonElement>(null);

	const initialFormValues = {
		fullName,
		email,
		rank,
		classList,
		description,
	};

	const formValidationsSchema = Yup.object({
		fullName: fullNameValidate,
		email: emailValidate,
		classList: classListValidate,
		rank: Yup.string().required('Required'),
		description: descriptionValidate,
	});

	useEffect(() => {
		const formButton = buttonRef.current as HTMLButtonElement;

		setHandleSubmitForm(() => () => {
			formButton.type = 'submit';
			formButton.click();
		});
		setHandleResetForm(() => () => {
			formButton.type = 'reset';
			formButton.click();
		});
	}, []);

	return (
		<FormikForm
			className={cx('info-form-wrapper')}
			initialValues={initialFormValues}
			validationSchema={formValidationsSchema}
			onSubmit={console.log}
		>
			<Input name="fullName" placeholder="Họ và tên" separate={0} />
			<Input name="email" placeholder="Email" />
			<DropList name="rank" labelMap={rankConfig}>
				<DropItem value="student">{rankConfig.student}</DropItem>
				<DropItem value="teacher">{rankConfig.teacher}</DropItem>
				<DropItem value="manager">{rankConfig.manager}</DropItem>
				<DropItem value="admin">{rankConfig.admin}</DropItem>
				<DropItem value="owner">{rankConfig.owner}</DropItem>
			</DropList>
			<Input
				name="description"
				placeholder="Mô tả bản thân (giới thiệu với mọi người)"
				tagName="textarea"
				style={{ resize: 'vertical', maxHeight: 300, minHeight: 100 }}
			/>

			<button style={{ display: 'none' }} ref={buttonRef}></button>
		</FormikForm>
	);
}

export default InfoForm;
