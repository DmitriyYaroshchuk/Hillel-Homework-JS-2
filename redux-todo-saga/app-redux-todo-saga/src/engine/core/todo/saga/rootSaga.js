import {all,call} from "redux-saga/effects";
import {todoWatcher} from "./watchers";
export function* rootSaga () {
    yield all([
        call(todoWatcher),
    ])
}