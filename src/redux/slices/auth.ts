import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { InitAuthStore } from '../../types/initStore';

const initialState: InitAuthStore = {
	id: '',
	isLogged: false,
	accountType: null,
	email: '',
	facebook: '',
	username: '',
	fullName: '',
	avatar: '',
	rank: '',
	classList: [],
	sharedUrl: '',
	description: '',
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<InitAuthStore>) => {
			return {
				...state,
				...action.payload,
				facebook: action.payload.facebook.replace(/^.*\/\/[^\/]+/, ''),
			};
		},
		logout: () => initialState,
		changeProfile: (
			state,
			action: PayloadAction<Partial<InitAuthStore>>
		) => ({
			...state,
			...action.payload,
			facebook:
				action.payload.facebook?.replace(/^.*\/\/[^\/]+/, '') || '',
		}),
	},
});

export default authSlice.reducer;
export const { login, logout, changeProfile } = authSlice.actions;
