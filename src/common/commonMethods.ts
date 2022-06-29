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

export const copyToClipBoard = (blob: Blob) => {
	const dataToCopy = [new ClipboardItem({ [blob.type]: blob })];
	navigator.clipboard.write(dataToCopy);
};
