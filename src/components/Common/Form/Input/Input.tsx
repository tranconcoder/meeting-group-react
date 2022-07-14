import type { InputProps } from '../../../../types/props';

import styles from './Input.module.scss';

import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { FastField, Field, FieldProps } from 'formik';
import { HiEyeOff, HiEye } from 'react-icons/hi';

const cx = classNames.bind(styles);

function Input({
	placeholder = ' ',
	isFastField = false,
	Icon,
	toggleVisiblePassword = true,
	type = 'text',
	name,
	separate = 30,
	tagName = 'input',
	...allAttribute
}: InputProps) {
	const [passwordIsVisible, setPasswordIsVisible] = useState(false);

	const InputWrapper = isFastField ? FastField : Field;
	const Input = tagName;

	const inputType =
		type === 'password' && toggleVisiblePassword
			? passwordIsVisible
				? 'text'
				: 'password'
			: 'text';

	const toggleVisiblePasswordButton =
		type === 'password' && toggleVisiblePassword ? (
			passwordIsVisible ? (
				<HiEyeOff />
			) : (
				<HiEye />
			)
		) : null;

	const handleClickEyeIcon = () => {
		setPasswordIsVisible(!passwordIsVisible);
	};

	return (
		<InputWrapper name={name} placeholder=" ">
			{(fieldProps: FieldProps) => {
				const errorMessage = fieldProps.meta.error;
				const hasError = errorMessage && fieldProps.meta.touched;

				return (
					<div
						className={cx('input-wrapper')}
						style={{ marginTop: separate }}
					>
						<label className={cx('input-container')}>
							{/* Input element */}

							<Input
								{...allAttribute}
								{...fieldProps.field}
								className={cx({ error: hasError })}
								type={inputType}
								placeholder=" "
							/>

							{/* Icon */}
							<p>
								{Icon && <Icon />}
								<span>{placeholder}</span>
							</p>

							{/* Toggle visible password button */}
							<div
								className={cx('eye-container')}
								onClick={handleClickEyeIcon}
							>
								{toggleVisiblePasswordButton}
							</div>
						</label>

						{/* Error message */}
						<p
							className={cx('warning-container', {
								show: hasError,
							})}
						>
							{errorMessage}
						</p>
					</div>
				);
			}}
		</InputWrapper>
	);
}

export default Input;
