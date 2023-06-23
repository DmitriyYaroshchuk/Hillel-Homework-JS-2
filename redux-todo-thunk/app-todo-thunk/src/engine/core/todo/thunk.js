import {addItem, removeItem} from "./todoSlice";

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
export const handleRemoveThunk = (id) => {
    return (dispatch, getState) => {
        const items = getState().todo.items;
        dispatch(removeItem(id));
        const newItems = items.filter(item => item.id !== id);
        localStorage.setItem('items', JSON.stringify(newItems));
    }
}

export const handleEditThunk = (id) => {
    return (dispatch, getState) => {
        return newText => {
            const items = getState().todo.items;
            const updatedItems = items.map(item => {
                if (item.id === id) {
                    return { ...item, text: newText }
                }
                return item;
            });
            dispatch(addItem(updatedItems));
            localStorage.setItem('items', JSON.stringify(updatedItems));
        };
    };
};