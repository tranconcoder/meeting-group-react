import * as Yup from 'yup';
import classNames from 'classnames/bind';
import styles from './InfoContainer.module.scss';
import { FormikForm, Input } from '../../Common';
import { useAppSelector } from '../../../common/reduxHooks';
import {
	classListValidate,
	descriptionValidate,
	emailValidate,
	fullNameValidate,
} from '../../../config/validateConfig';

const cx = classNames.bind(styles);

function InfoContainer() {
	const fullName = useAppSelector(state => state.auth.fullName);
	const email = useAppSelector(state => state.auth.email);
	const rank = useAppSelector(state => state.auth.rank);
	const classList = useAppSelector(state => state.auth.classList);
	const description = useAppSelector(state => state.auth.description);

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
		description: descriptionValidate,
	});

	return (
		<FormikForm
			className={cx('info-wrapper')}
			initialValues={initialFormValues}
			validationSchema={formValidationsSchema}
			onSubmit={console.log}
		>
			<Input name="fullName" />
		</FormikForm>
	);
}

export default InfoContainer;
