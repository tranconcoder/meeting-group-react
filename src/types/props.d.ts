import React, {
	CSSProperties,
	Dispatch,
	PropsWithChildren,
	ReactElement,
	ReactNode,
	SetStateAction,
} from 'react';
import { JsxElement } from 'typescript';

// SubmitFormButton
export interface SubmitFormButtonProps {
	content: string;
	handleClick?: () => any;
}

// InputForm
export interface InputFormProps {
	placeholder: string;
	state: [
		stateValue: string,
		setStateValue: (newValue: string) => any
	];
	type?: 'text' | 'password';
	Icon?: React.FC;
	styles?: CSSProperties;
	toggleVisiblePassword?: boolean;
	validates?: Partial<{
		required: boolean;
		minLength: number;
		maxLength: number;
		isEmail: boolean;
		invalidSymbol: string[];
		number: 'some' | 'every';
		upperCase: 'some' | 'every';
		lowerCase: 'some' | 'every';
		specialLetter: 'some' | 'every';
		equalTo: {
			label: string;
			value: string;
		};
	}>;
	getValidateHandler?: [{ current: any }, (cloneObject: {}) => any];
}

// GoogleLoginButton
export interface GoogleLoginButtonProps {
	styles?: CSSProperties;
}

// ButtonProps
export interface ButtonProps {
	children?: ReactNode;
	styles?: CSSProperties;
	to?: string | number;
}

// PanelBoxProps
export interface PanelBoxProps {
	showBox: boolean;
}

// Layout1Props
export interface Layout1Props {
	Body: PropsWithChildren;
}

export interface AddTitleProps {
	children: ReactNode;
	title: string;
	onClick?: (
		titleState: string,
		setTitleState: Dispatch<SetStateAction<string>>
	) => void;
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
