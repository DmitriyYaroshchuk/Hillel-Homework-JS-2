import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        items: [],
        updateItem: [],
        hide: false,
    },
    reducers: {
        addItem: (state, action) => {
            state.items = action.payload
        },
        removeItem: (state, action) => {
            const id = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === id);
            state.items.splice(itemIndex, 1);
            // state.items = action.payload;
        },
        hideItem: (state, action) => {
            state.hide = action.payload;
        },
        editItem: (state, action) => {
            state.updateItem = action.payload;
        }

    }
});
export const todoReducer = todoSlice.reducer;
export const {
    addItem,
    removeItem,
    hideItem,
    editItem,
} = todoSlice.actions;
export const todoSelectors = {
    items: state => state.todo.items,
    length: state => state.todo.items.length,
    hide: state => state.todo.hide,
    updateItem: state => state.todo.updateItem,
}