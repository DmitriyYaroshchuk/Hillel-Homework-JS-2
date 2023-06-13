import {configureStore} from "@reduxjs/toolkit";
import todo from "../../core/todoSlice"
export const store = configureStore({
    reducer: {
        todo
    }
})