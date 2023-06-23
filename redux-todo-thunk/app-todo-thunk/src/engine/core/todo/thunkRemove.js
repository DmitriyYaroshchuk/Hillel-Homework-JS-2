import {removeItem} from "./todoSlice";

export const handleRemoveThunk = (id) => {
    return (dispatch, getState) => {
        const items = getState().todo.items;
        dispatch(removeItem(id));
        const newItems = items.filter(item => item.id !== id);
        localStorage.setItem('items', JSON.stringify(newItems));
    }
}