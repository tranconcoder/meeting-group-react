import { useEffect, useState } from 'react';

import { InputFormProps } from '../../../types/props';
import {
	getClassNameModuleGenerator,
	validateEmail,
	isLowerLetter,
	isUpperLetter,
	isSpecialLetter,
	//@ts-ignore
} from '../../../common/commonMethods';

import styles from './InputForm.module.scss';
import { HiEyeOff, HiEye } from 'react-icons/hi';

const cx = getClassNameModuleGenerator(styles);

function InputForm({
	placeholder,
	state,
	Icon,
	type = 'text',
	styles = {},
	toggleVisiblePassword,
	validates,
	getValidateHandler,
}: InputFormProps) {
	const [passwordIsVisible, setPasswordIsVisible] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [typed, setTyped] = useState(false);

	// Validate
	const validateHandler = (isSubmit = false) => {
		if (!validates || (!isSubmit && !typed)) return;

		const hasLowerLetter = state[0].split('').some(symbol => isLowerLetter(symbol));
		const hasUpperLetter = state[0].split('').some(symbol => isUpperLetter(symbol));
		const hasNumberLetter = state[0].split('').some(symbol => !Number.isNaN(Number(symbol)));
		const hasSpecialLetter = state[0].split('').some(symbol => isSpecialLetter(symbol));

		// Return falsy -> error
		switch (true) {
			// Required
			case !state[0] && validates.required: {
				return setErrorMessage('Thông tin này là bắt buộc!');
			}

			// Min - Max length
			case validates.minLength && state[0].length < validates.minLength: {
				return setErrorMessage(`Độ dài tối thiểu là ${validates.minLength} ký tự!`);
			}
			case validates.maxLength && state[0].length > validates.maxLength: {
				return setErrorMessage(`Độ dài tối đa là ${validates.maxLength} ký tự!`);
			}

			// Email
			case validates.isEmail && !validateEmail(state[0]): {
				return setErrorMessage(`Chỉ cho phép điền địa chỉ email!`);
			}

			// Number
			case validates.number === 'every' && (hasLowerLetter || hasUpperLetter): {
				return setErrorMessage('Chỉ cho phép nhập số (0 -> 9)!');
			}
			case validates.number === 'some' && !hasNumberLetter: {
				return setErrorMessage('Phải có ít nhất 1 chữ số!');
			}

			// LowerCase
			case validates.lowerCase === 'every' && hasUpperLetter: {
				return setErrorMessage('Trường này bắt buộc viết thường toàn bộ!');
			}
			case validates.lowerCase === 'some' && !hasLowerLetter: {
				return setErrorMessage('Phải có ít nhất 1 ký tự viết thường!');
			}

			// UpperCase
			case validates.upperCase === 'every' && hasLowerLetter: {
				return setErrorMessage('Trường này bắt buộc viết hoa toàn bộ!');
			}
			case validates.upperCase === 'some' && !hasUpperLetter: {
				return setErrorMessage('Phải có ít nhất 1 ký tự viết hoa!');
			}

			// Special letter
			case validates.specialLetter === 'every' &&
				(hasLowerLetter || hasUpperLetter || hasNumberLetter): {
				return setErrorMessage('Chỉ cho phép điền ký tự đặc biệt!');
			}
			case validates.specialLetter === 'some' && !hasSpecialLetter: {
				return setErrorMessage('Phải có ít nhất 1 ký tự đặc biệt!');
			}

			// Equal check
			case validates.equalTo && validates.equalTo.value !== state[0]: {
				return setErrorMessage(`Giá trị không khớp với ${validates.equalTo?.label}!`);
			}

			// InvalidSymbol
			default: {
				const invalidSymbolList: string[] = [];

				validates.invalidSymbol?.forEach(invalidSymbol => {
					if (state[0].includes(invalidSymbol)) {
						invalidSymbolList.push(invalidSymbol);
					}
				});

				if (invalidSymbolList.length > 0) {
					return setErrorMessage(
						`Chứa ký tự không được phép ${invalidSymbolList.join(', ')}`
					);
				}

				setErrorMessage('');
				return true;
			}
		}
	};

	// Validate input value
	useEffect(() => {
		validateHandler();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state[0]]);

	// Send validateHandler to parent components
	useEffect(() => {
		if (!getValidateHandler) return;

		getValidateHandler[0].current = validateHandler;
		getValidateHandler[1]({});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state[0]]);

	return (
		<div className={cx('input-wrapper')} style={styles}>
			<label className={cx('input-container')}>
				<input
					className={cx({ error: errorMessage })}
					type={type === 'password' ? (passwordIsVisible ? 'text' : 'password') : 'text'}
					placeholder=" "
					value={state[0]}
					onChange={e => {
						state[1](e.target.value);
						setTyped(true);
					}}
				/>

				<p>
					{Icon && <Icon />}
					<span>{placeholder}</span>
				</p>

				{toggleVisiblePassword && state[0] && (
					<div
						className={cx('eye-container')}
						onClick={() => setPasswordIsVisible(!passwordIsVisible)}
					>
						{passwordIsVisible ? <HiEyeOff /> : <HiEye />}
					</div>
				)}
			</label>

			<p className={cx('warning-container', { show: errorMessage })}>{errorMessage}</p>
		</div>
	);
}

export default InputForm;
