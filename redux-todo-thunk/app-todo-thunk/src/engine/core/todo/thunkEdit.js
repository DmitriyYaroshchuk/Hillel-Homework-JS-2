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
export const saveChangesThunk = (props) => {
    const {todoInputEdit, handleEdit, showContent} = props;
    console.log('todoInputEditThunk :', todoInputEdit);
    console.log(handleEdit());
    console.log(showContent);
    return () => {
        handleEdit(todoInputEdit);
        showContent();
    }
}