import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import qrCodeReducer from './slices/qrCode';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		qrCode: qrCodeReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
