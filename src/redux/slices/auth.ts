import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { InitAuthStore } from '../../types/initStore';

const initialState: InitAuthStore = {
	id: null,
	isLogged: false,
	accountType: null,
	email: null,
	username: null,
	fullName: null,
	avatar: null,
	rank: null,
	classList: null,
	sharedUrl: null,
	description: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<InitAuthStore>) => {
			return action.payload;
		},
		logout: () => initialState,
		changeProfile: (
			state,
			action: PayloadAction<Partial<InitAuthStore>>
		) => ({
			...state,
			...action.payload,
		}),
	},
});

export default authSlice.reducer;
export const { login, logout, changeProfile } = authSlice.actions;
