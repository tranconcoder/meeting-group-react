import React from 'react';

export interface DropListContextType {
	currentValue: string;
	handleChangeValue: (value: string) => void;
}

export interface InfoContainerContextType {
	setHandleResetForm: (action: React.SetStateAction<() => any>) => any;
	setHandleSubmitForm: (action: React.SetStateAction<() => any>) => any;
	handleResetForm: () => any;
	handleSubmitForm: () => any;
}
