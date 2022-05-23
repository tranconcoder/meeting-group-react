import React, { CSSProperties, ReactElement } from 'react';

// SubmitFormButton
declare interface SubmitFormButtonProps {
	content: string;
	handleClick?: () => any;
}

// InputForm
declare interface InputFormProps {
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
declare interface GoogleLoginButtonProps {
	styles?: CSSProperties;
}

// ButtonProps
declare interface ButtonProps {
	children?: string;
	styles?: CSSProperties;
}

// PanelBoxProps
declare interface PanelBoxProps {
	showBox: boolean;
}

// Layout1Props
declare interface Layout1Props {
	Body: React.FunctionComponent;
}
