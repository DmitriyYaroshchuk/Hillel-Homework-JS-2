import {addItem} from "../../slice";
import {put,call} from "redux-saga/effects";

export function* callAddTodoWorker(action) {
    const {value,items} = action.payload;
    const text = value.todoInput;
    const newItems = [
        ...items,
        { id: Math.floor(Math.random() * 100), text }
    ];
    yield put(addItem(newItems));
    yield call(() => localStorage.setItem('items', JSON.stringify(newItems)));
}
