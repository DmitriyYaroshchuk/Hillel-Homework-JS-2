import {createSlice} from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            const newItem = {
                id: Math.floor(Math.random() * 100),
                text: action.payload
            }
            state.items.push(newItem);
        }
    }
});
console.log('todoSlice: ', todoSlice);

//_____action_____//
export const { addItem } = todoSlice.actions;

//_____todo_____//
export default todoSlice.reducer;

//_____items_____//
export const items = state => {
    console.log('items-state: ', state)
    return state.todo.items;
}
