import type {
	AllHTMLAttributes,
	Attributes,
	CSSProperties,
	Dispatch,
	FunctionComponent,
	ReactNode,
	SetStateAction,
} from 'react';
import type { IconType } from 'react-icons';
import type { ObjectAnyKey } from './common';

import { object as YupObject } from 'yup';
import React from 'react';

// SubmitFormButton
export interface SubmitFormButtonProps {
	content: string;
	handleClick?: () => any;
}

// InputForm
export interface InputProps
	extends AllHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
	placeholder?: string;
	type?: 'text' | 'password';
	isFastField?: boolean;
	Icon?: IconType;
	toggleVisiblePassword?: boolean;
	getValidateHandler?: [{ current: any }, (cloneObject: {}) => any];
	name: string;
	tagName?: 'input' | 'textarea';
	separate?: number;
}

// GoogleLoginButton
export interface GoogleLoginButtonProps {
	styles?: CSSProperties;
}

// ButtonProps
export interface ButtonProps extends AllHTMLAttributes<any> {
	children?: ReactNode;
	tagName?: React.ElementType;
	styles?: CSSProperties;
	to?: string | number;
	colorStyle?:
		| 'normal-purple'
		| 'normal-blue'
		| 'change'
		| 'warning'
		| 'error';
}

// PanelBoxProps
export interface PanelBoxProps {
	showBox: boolean;
}

// Layout1Props
export interface Layout1Props {
	Body: FunctionComponent;
}

export interface AddTitleProps extends AllHTMLAttributes<React.ElementType> {
	children: ReactNode;
	title: string;
	onClick?: (
		titleState: string,
		setTitleState: Dispatch<SetStateAction<string>>
	) => void;
	className?: string;
	copyOnClick?: string;
	parentTag?: React.ElementType;
}

// QRCodeProps
type QRProps = {
	value: string;
	size: number;
	level: string;
	bgColor: string;
	fgColor: string;
	style?: CSSProperties;
	includeMargin: boolean;
	imageSettings?: {
		src: string;
		height: number;
		width: number;
		excavate: boolean;
		x?: number;
		y?: number;
	};
};

// QRCodeProps
export interface QRCodeProps extends Partial<QRProps> {
	value: string;
	getCanvas?: (element: HTMLCanvasElement) => any;
	getDownloadAction?: (downloadAction: () => any) => any;
}

// CopyButtonProps
export interface CopyButtonProps {
	duration?: number;
	content: string;
	style?: CSSProperties;
}

// InformationPage
// ProfilePage
// Title
export interface InformationPageProfileTitleProps {
	content: string;
	tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	icon?: {
		src: IconType;
		scale: number;
		style?: CSSProperties;
	};
	style?: CSSProperties;
}

// FormProps
const yupObject = YupObject();
export interface FormProps extends AllHTMLAttributes<HTMLFormElement> {
	initialValues: ObjectAnyKey;
	onSubmit: (values: Values, formikHelpers?: FormikHelpers<Values>) => void;
	validationSchema: typeof yupObject;
	children: ReactNode;
}

// FooterDirectoryConfig
export interface FooterDirectionConfig {
	title: string;
	linkList: Array<{
		content: string;
		link: string;
		openInNewTab?: boolean;
	}>;
}

// DropListProps
export interface DropItem {
	value: string;
	label: string;
}

export interface DropListProps extends AllHTMLAttributes<HTMLButtonElement> {
	name: string;
	children?: ReactNode;
	labelMap: ObjectAnyKey<string>;
	separate?: number;
}

export interface DropItemProps {
	children: string;
	value: string;
}

// SelectProps
export interface SelectProps {
	name: string;
	children: ReactNode;
}
