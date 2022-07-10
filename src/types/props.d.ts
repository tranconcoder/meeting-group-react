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
export interface InputProps {
	placeholder?: string;
	type?: 'text' | 'password';
	isFastField?: boolean;
	Icon?: IconType;
	styles?: CSSProperties;
	toggleVisiblePassword?: boolean;
	getValidateHandler?: [{ current: any }, (cloneObject: {}) => any];
	name: string;
}

// GoogleLoginButton
export interface GoogleLoginButtonProps {
	styles?: CSSProperties;
}

// ButtonProps
export interface ButtonProps extends AllHTMLAttributes<any> {
	children?: ReactNode;
	styles?: CSSProperties;
	to?: string | number;
	type?: 'normal-purple' | 'normal-blue' | 'change' | 'warning' | 'error';
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
export interface FormProps {
	initialValues: ObjectAnyKey;
	onSubmit: (values: Values, formikHelpers?: FormikHelpers<Values>) => void;
	validationSchema: typeof yupObject;
	children: ReactNode;
	className?: string;
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
