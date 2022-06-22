// Auth store
export interface InitAuthStore {
	id: string;
	isLogged: boolean;
	accountType: null | 'default' | 'google';
	email: null | string;
	username: null | string;
	fullName: null | string;
	avatar: null | string;
	// HS -> GV -> GThị -> BGH -> HTrưởng
	rank:
		| null
		| 'student'
		| 'teacher'
		| 'manager'
		| 'admin'
		| 'owner';
	className: null | string | string[];
	sharedUrl: string;
	description: string;
}

// qrCode store
export interface InitQrCodeStore {
	dataToPreview: string;
}
