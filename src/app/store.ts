import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

//Types are derived from the store itself: never write them by hand

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;