// Auth store
export interface InitAuthStore {
	isLogged: boolean;
	accountType: null | 'default' | 'google';
	email: null | string;
	username: null | string;
	fullName: null | string;
	avatar: null | string;
	// HS -> GV -> GThị -> BGH -> HTrưởng
	rank: null | 'student' | 'teacher' | 'manager' | 'admin' | 'owner';
	className: null | string | string[];
}
