import {removeItem} from "../../slice";
import {put,call} from "redux-saga/effects";

export function* callRemoveTodoWorker (action) {
    const {id,items} = action.payload;
    yield put(removeItem(id));
    const newItems = items.filter(item => item.id !== id);
    yield call(() => localStorage.setItem('items', JSON.stringify(newItems)));
}