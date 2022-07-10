import type { FormProps } from '../../../types/props';

import { Form, Formik } from 'formik';

function FormikForm(props: FormProps) {
	const { children } = props;

	return (
		<Formik {...props}>
			<Form>{children}</Form>
		</Formik>
	);
}

export default FormikForm;
