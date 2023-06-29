import {addItem} from "../../slice";
import {put,call} from "redux-saga/effects";

export function* callGetTodoWorker () {
    const response = yield call(() => JSON.parse(localStorage.getItem('items')) || []);
    yield put(addItem(response));
}