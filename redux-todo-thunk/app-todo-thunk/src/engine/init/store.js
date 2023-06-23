import {configureStore} from "@reduxjs/toolkit";
import {todoReducer} from "../core/todo/todoSlice";
import {logger} from "redux-logger/src";
import thunk from "redux-thunk";
export const store = configureStore({
    reducer: {
        todo: todoReducer
    },
    middleware: [logger, thunk],
});