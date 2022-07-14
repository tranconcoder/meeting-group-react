import styles from './InfoForm.module.scss';

import classNames from 'classnames/bind';
import * as Yup from 'yup';
import { useContext, useEffect, useRef } from 'react';
import { useAppSelector } from '../../../../common/reduxHooks';
import rankConfig from '../../../../config/rankConfig';
import {
	classListValidate,
	descriptionValidate,
	emailValidate,
	fullNameValidate,
} from '../../../../config/validateConfig';
import { FormikForm, Input } from '../../../Common';
import { InfoContainerContext } from '../ChangeInfo';

import DropItem from '../../../Common/Form/DropList/DropItem/DropItem';
import DropList from '../../../Common/Form/DropList/DropList';

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
	}, []); // eslint-disable-line

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
				placeholder="Giới thiệu với mọi người"
				tagName="textarea"
				style={{ resize: 'vertical', maxHeight: 500, minHeight: 200 }}
			/>

			<button style={{ display: 'none' }} ref={buttonRef}></button>
		</FormikForm>
	);
}

export default InfoForm;
