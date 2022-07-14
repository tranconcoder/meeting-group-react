// Auth store
export type RankType = 'student' | 'teacher' | 'manager' | 'admin' | 'owner';

export interface InitAuthStore {
	id: string;
	isLogged: boolean;
	accountType: null | 'default' | 'google';
	email: string;
	facebook: string;
	username: string;
	fullName: string;
	avatar: string;
	// HS -> GV -> GThị -> BGH -> HTrưởng
	rank: '' | RankType;
	classList: string[];
	sharedUrl: string;
	description: string;
}

// qrCode store
export interface InitQrCodeStore {
	dataToPreview: string;
}

// toastMessageList store
export interface ToastMessageItemStore {
	id: string;
	state: 'creating' | 'normal' | 'deleting';
	type: 'success' | 'notify' | 'warning' | 'error';
	title: string;
	content: string;
	duration: number;
	handleAction?: () => any;
	actionTitle?: string;
}

export interface ToastMessageListStore extends Array<ToastMessageItemStore> {}
