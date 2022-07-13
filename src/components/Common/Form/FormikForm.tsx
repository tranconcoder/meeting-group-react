import type { FormProps } from '../../../types/props';

import { Form, Formik } from 'formik';

function FormikForm(props: FormProps) {
	const {
		children,
		initialValues,
		validationSchema,
		onSubmit,
		...allAttribute
	} = props;

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			<Form {...allAttribute}>{children}</Form>
		</Formik>
	);
}

export default FormikForm;
