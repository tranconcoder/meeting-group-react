import clsx from 'clsx';

import type { ObjectAnyKey } from '../types/common';

export const getClassNameModuleGenerator =
	(stylesObject: any) =>
	(...selectorList: Array<string | boolean | ObjectAnyKey>) => {
		let classNameList = '';

		for (const selector of selectorList) {
			if (typeof selector === 'string') {
				classNameList +=
					(classNameList && ' ') + (clsx(stylesObject[selector]) || selector);
				continue;
			}

			if (typeof selector === 'object') {
				for (const key in selector) {
					if (selector[key]) {
						classNameList += ' ' + clsx(stylesObject[key]);
					}
				}
			}
		}

		return classNameList;
	};

export const validateEmail = (email: string) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
};

export const isLowerLetter = (str: string) => {
	return str.length === 1 && str.match(/[a-z]/);
};

export const isUpperLetter = (str: string) => {
	return str.length === 1 && str.match(/[A-Z]/);
};

export const isSpecialLetter = (str: string) => {
	// eslint-disable-next-line no-useless-escape
	const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

	return specialChars.test(str);
};
