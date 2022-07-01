// Auth store
export interface InitAuthStore {
	id: null | string;
	isLogged: boolean;
	accountType: null | 'default' | 'google';
	email: null | string;
	username: null | string;
	fullName: null | string;
	avatar: null | string;
	// HS -> GV -> GThị -> BGH -> HTrưởng
	rank: null | 'student' | 'teacher' | 'manager' | 'admin' | 'owner';
	className: null | string | string[];
	sharedUrl: null | string;
	description: null | string;
}

// qrCode store
export interface InitQrCodeStore {
	dataToPreview: string;
}
