// SubmitFormButton
declare interface SubmitFormButtonProps {
	content: string;
	handleOnClick?: () => any;
}

// AuthPage -> LoginOrRegister
declare type LoginOrRegisterProps = "login" | "register";

// InputForm
declare interface InputFormProps {
	placeholder: string;
	state: [stateValue: string, setStateValue: (newValue: string) => any];
	type?: "text" | "password";
	Icon?: React.FC;
	styles?: CSSProperties;
	toggleVisiblePassword?: boolean;
	validates?: Partial<{
		required: boolean;
		minLength: number;
		maxLength: number;
		isEmail: boolean;
		invalidSymbol: string[];
		number: "some" | "every";
		upperCase: "some" | "every";
		lowerCase: "some" | "every";
		specialLetter: "some" | "every";
		equalTo: {
			label: string;
			value: string;
		};
	}>;
	getValidateHandler?: [{ current: any }, (cloneObject: {}) => any];
}
declare interface InputFormValidateHandlerRef {
	current: (isSubmit: boolean) => any;
}
