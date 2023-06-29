import {configureStore} from "@reduxjs/toolkit";
import {todoReducer} from "../core/todo/slice";
import {logger} from "redux-logger/src";
import createSagaMiddleware from "redux-saga";
import {rootSaga} from "../core/todo/saga/rootSaga";
export const sagaMiddleWare = createSagaMiddleware();
export const store = configureStore({
    reducer: {
        todo: todoReducer
    },
    middleware: [
        logger,
        sagaMiddleWare
    ],
});
sagaMiddleWare.run(rootSaga);