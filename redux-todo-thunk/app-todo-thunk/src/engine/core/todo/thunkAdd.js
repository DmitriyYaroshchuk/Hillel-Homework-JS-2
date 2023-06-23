import {addItem} from "./todoSlice";

export const handleAddThunk = (value) => {
    return (dispatch, getState) => {
        const items = getState().todo.items;
        const text = value.todoInput;
        const newItems = [
            ...items,
            { id: Math.floor(Math.random() * 100), text }
        ];
        dispatch(addItem(newItems));
        localStorage.setItem('items', JSON.stringify(newItems));
        value.todoInput = '';
    }
}


