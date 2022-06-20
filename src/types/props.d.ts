import React, { CSSProperties, ReactElement, ReactNode } from 'react';

// SubmitFormButton
export interface SubmitFormButtonProps {
	content: string;
	handleClick?: () => any;
}

// InputForm
export interface InputFormProps {
	placeholder: string;
	state: [stateValue: string, setStateValue: (newValue: string) => any];
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
	Body: React.FunctionComponent;
}
