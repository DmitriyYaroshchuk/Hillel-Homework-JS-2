import {takeEvery, takeLatest} from "redux-saga/effects";
import {todoAsyncActions} from "./asyncActions";
import {callGetTodoWorker} from "./workers/getTodo";
import {callAddTodoWorker} from "./workers/addTodo";
import {callRemoveTodoWorker} from "./workers/removeTodo";
import {callEditTodoWorker} from "./workers/editTodo";
import {callSaveTodoWorker} from "./workers/saveTodo";
export function* todoWatcher() {
    yield takeEvery(todoAsyncActions.getTodoAsync.type, callGetTodoWorker);
    yield takeLatest(todoAsyncActions.addTodoAsync.type, callAddTodoWorker);
    yield takeLatest(todoAsyncActions.removeTodoAsync.type, callRemoveTodoWorker);
    yield takeEvery(todoAsyncActions.editTodoAsync.type, callEditTodoWorker);
    yield takeEvery(todoAsyncActions.saveTodoAsync.type, callSaveTodoWorker);
}