declare global {
	// InputForm
	interface InputFormValidateHandlerRef {
		current: (isSubmit: boolean) => any;
	}
}
