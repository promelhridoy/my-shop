import { createSlice, nanoid, type PayloadAction } from '@reduxjs/toolkit';

interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

const initialState: Todo[] = [];

const todoSlice = createSlice({
    name: 'todos',
    initialState, initialState satisfies Todo[],
    reducers: {
        clearDone(state) {
            state = state.filter(todo => !todo.completed);
        }
    }
})

export const { clearDone } = todoSlice.actions;