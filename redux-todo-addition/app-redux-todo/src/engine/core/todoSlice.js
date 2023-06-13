import {createSlice} from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: state => {
            const newItem = {
                id: Math.floor(Math.random() * 100),
                // text:
            }
            state.items.push(newItem)
        }
    }
});
export const { addItem } = todoSlice.actions;
export default todoSlice.reducer;
