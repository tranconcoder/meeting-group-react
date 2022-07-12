import type {
	ToastMessageItemStore,
	ToastMessageListStore,
} from '../../types/initStore';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ToastMessageListStore = [];

const toastMessageSlice = createSlice({
	name: 'toastMessage',
	initialState,
	reducers: {
		addMessage(
			state: ToastMessageListStore,
			action: PayloadAction<ToastMessageItemStore>
		) {
			state.push(action.payload);
			return state;
		},

		hideMessage(
			state: ToastMessageListStore,
			action: PayloadAction<string>
		): ToastMessageListStore {
			const messageId = action.payload;
			const newMessageList: ToastMessageListStore = state.map(message =>
				message.id === messageId
					? {
							...message,
							state: 'deleting',
					  }
					: message
			);

			return newMessageList;
		},

		hideAllMessage(state: ToastMessageListStore): ToastMessageListStore {
			const newMessageList: ToastMessageListStore = state.map(
				message => ({
					...message,
					state: 'deleting',
				})
			);

			return newMessageList;
		},

		deleteMessage(
			state: ToastMessageListStore,
			action: PayloadAction<string>
		): ToastMessageListStore {
			const messageId = action.payload;
			const newMessageList = state.filter(
				message => message.id !== messageId
			);

			return newMessageList;
		},

		deleteAllMessage(): ToastMessageListStore {
			return [];
		},
	},
});

export default toastMessageSlice.reducer;
export const {
	addMessage,
	hideMessage,
	hideAllMessage,
	deleteMessage,
	deleteAllMessage,
} = toastMessageSlice.actions;
