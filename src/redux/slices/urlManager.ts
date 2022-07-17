import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { URLManagerStore } from '../../types/initStore';

const initialState: URLManagerStore = {
	accessWhenLogged: '',
};

const urlManagerSlice = createSlice({
	name: 'urlManager',
	initialState,
	reducers: {
		setUrl(
			state,
			action: PayloadAction<Partial<URLManagerStore>>
		): URLManagerStore {
			return {
				...state,
				...action.payload,
			};
		},
	},
});

export default urlManagerSlice.reducer;
export const { setUrl } = urlManagerSlice.actions;
