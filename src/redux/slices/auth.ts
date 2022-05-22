import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: InitAuthStore = {
	isLogged: false,
	accountType: null,
	email: null,
	username: null,
	fullName: null,
	avatar: null,
	rank: null,
	className: null,
};

// isLogged: true,
// accountType: 'google',
// email: 'tranconcoder@gmail.com',
// username: null,
// fullName: 'Trần Văn Còn',
// avatar: 'https://lh3.googleusercontent.com/ogw/ADea4I5shoTR4FEGvFq0eAbpcVH-FwE9ALF7Flps5uDz=s64-c-mo',
// rank: null,
// className: null,

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<InitAuthStore>) => action.payload,
		logout: () => initialState,
		changeProfile: (state, action: PayloadAction<Partial<InitAuthStore>>) => ({
			...state,
			...action.payload,
		}),
	},
});

export default authSlice.reducer;
export const { login, logout, changeProfile } = authSlice.actions;
