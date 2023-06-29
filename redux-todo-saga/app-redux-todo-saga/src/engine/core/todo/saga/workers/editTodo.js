import {addItem} from "../../slice";
import {put,call} from "redux-saga/effects";

export function* callEditTodoWorker(action) {
    const {items, id, newText} = action.payload;
    const updatedItems = items.map(item => {
        if (item.id === id) {
            return { ...item, text: newText }
        }
        return item;
    });
    yield put(addItem(updatedItems));
    yield call(() => localStorage.setItem('items', JSON.stringify(updatedItems)));
}