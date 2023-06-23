import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items = action.payload.map(item => ({
                ...item,
                id: Math.floor(Math.random() * 100),
                hide: false,
            }))
        },
        removeItem: (state, action) => {
            const id = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === id);
            state.items.splice(itemIndex, 1);
        },
        hideItem: (state, action) => {
            const { id, hide } = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                item.hide = hide;
            }
        },
    }
});
export const todoReducer = todoSlice.reducer;
export const {
    addItem,
    removeItem,
    hideItem,
} = todoSlice.actions;
export const todoSelectors = {
    items: state => state.todo.items,
    length: state => state.todo.items.length,
    hide: state => state.todo.hide
}