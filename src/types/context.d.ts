import React from 'react';

export interface DropListContextType {
	name: string;
}

export interface ChangeInfoContextType {
	setHandleResetForm: (action: React.SetStateAction<() => void>) => void;
	setHandleSubmitForm: (action: React.SetStateAction<() => void>) => void;
	handleResetForm: () => void;
	handleSubmitForm: () => void;
}
