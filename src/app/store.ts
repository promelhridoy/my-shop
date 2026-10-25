import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer,
    },
});

//Types are derived from the store itself: never write them by hand

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;