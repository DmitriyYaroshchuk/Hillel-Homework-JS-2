import {addItem} from "./todoSlice";

export const handleEditThunk = (props) => {
    const { id, newText } = props;
    return (dispatch, getState) => {
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
export const saveChangesThunk = (event, handleEdit, showContent) => {
    return () => {
        const currentText = event.target.previousSibling.value;
        handleEdit(currentText);
        showContent();
    }
}