import type { InitQrCodeStore } from '../../types/initStore';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: InitQrCodeStore = {
	dataToPreview: '',
};

const qrCodeSlice = createSlice({
	name: 'qrCode',
	initialState,
	reducers: {
		setDataToPreview: (
			state: InitQrCodeStore,
			action: PayloadAction<string>
		) => {
			state.dataToPreview = action.payload;
			return state;
		},
	},
});

export default qrCodeSlice.reducer;
export const { setDataToPreview } = qrCodeSlice.actions;
