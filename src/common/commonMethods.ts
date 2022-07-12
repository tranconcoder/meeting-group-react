import type { FormatImageOptions } from '../types/common';

import FileResizer from 'react-image-file-resizer';

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

export const copyToClipBoard = (dataToSave: Blob | string) => {
	if (typeof dataToSave === 'string') {
		navigator.clipboard.writeText(dataToSave);
	} else {
		const dataToCopy = [
			new ClipboardItem({ [dataToSave.type]: dataToSave }),
		];
		navigator.clipboard.write(dataToCopy);
	}
};

export const downloadFile = (url: string, fileName: string) => {
	const link = document.createElement('a');

	link.href = url;
	link.download = fileName;

	link.click();
	link.remove();
};

export const sleep = (ms: number) =>
	new Promise(resolve => {
		setTimeout(resolve, ms);
	});

export const dataUrlToBlob = async (url: string): Promise<Blob> => {
	return await fetch(url).then(res => res.blob());
};

export const formatImage = async (
	data: Blob | string,
	options: FormatImageOptions
): Promise<string> => {
	const fileBlob =
		typeof data === 'string' ? await dataUrlToBlob(data) : data;

	return new Promise(resolve => {
		FileResizer.imageFileResizer(
			fileBlob,
			options.maxWidth,
			options.maxHeight,
			options.compressFormat,
			options.quality,
			options.rotation,
			uri => {
				resolve(uri as string);
			},
			options.outputFile || 'base64',
			options.minWidth,
			options.minHeight
		);
	});
};
