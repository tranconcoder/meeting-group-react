import * as Yup from 'yup';

const getRequiredMessage = (label: string) => `${label} bà bắt buộc`;
const getMinMessage = (label: string, minLength: number) =>
	`${label} phải từ ${minLength} trở lên`;
const getMaxMessage = (label: string, maxLength: number) =>
	`${label} không được dài hơn ${maxLength} ký tự`;
const getNotEqualMessage = (label: string, labelTwo: string) =>
	`${label} phải trùng với ${labelTwo}`;
const emailMessage = 'Chỉ cho phép nhập email vào đây';

// Username
const USERNAME_LABEL = 'Tên đăng nhập';
const USERNAME_MIN_LENGTH = 6;
const USERNAME_MAX_LENGTH = 24;

export const usernameValidate = Yup.string()
	.required(getRequiredMessage(USERNAME_LABEL))
	.min(6, getMinMessage(USERNAME_LABEL, USERNAME_MIN_LENGTH))
	.max(24, getMaxMessage(USERNAME_LABEL, USERNAME_MAX_LENGTH));

// Password
const PASSWORD_LABEL = 'Mật khẩu';
const PASSWORD_MIN_LENGTH = 8;
const PASSWORD_MAX_LENGTH = 30;

export const passwordValidate = Yup.string()
	.required(getRequiredMessage(PASSWORD_LABEL))
	.min(8, getMinMessage(PASSWORD_LABEL, PASSWORD_MIN_LENGTH))
	.max(30, getMaxMessage(PASSWORD_LABEL, PASSWORD_MAX_LENGTH));

// Retype password
const RETYPE_PASSWORD_LABEL = 'Nhập lại mật khẩu';

export const getRetypePasswordValidate = (fieldNameToCompare: string) =>
	passwordValidate.concat(
		Yup.string().oneOf(
			[Yup.ref(fieldNameToCompare), null],
			getNotEqualMessage(RETYPE_PASSWORD_LABEL, PASSWORD_LABEL)
		)
	);

// Fullname
const FULL_NAME_LABEL = 'Họ và tên';
const FULL_NAME_MIN_LENGTH = 2;
const FULL_NAME_MAX_LENGTH = 30;

export const fullNameValidate = Yup.string()
	.required(getRequiredMessage(FULL_NAME_LABEL))
	.min(
		FULL_NAME_MIN_LENGTH,
		getMinMessage(FULL_NAME_LABEL, FULL_NAME_MIN_LENGTH)
	)
	.max(
		FULL_NAME_MAX_LENGTH,
		getMaxMessage(FULL_NAME_LABEL, FULL_NAME_MAX_LENGTH)
	);

// Email
const EMAIL_LABEL = 'Email';

export const emailValidate = Yup.string()
	.required(getRequiredMessage(EMAIL_LABEL))
	.email(emailMessage);
