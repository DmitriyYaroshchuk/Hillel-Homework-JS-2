import {configureStore} from "@reduxjs/toolkit";
import {todoReducer} from "../core/todoSlice";
export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
})