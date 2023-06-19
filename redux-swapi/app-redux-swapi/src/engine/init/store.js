import {configureStore} from "@reduxjs/toolkit";
import {swapiReducers} from "../core/swapiSlice";
export const store = configureStore({
    reducer: {
        swapi: swapiReducers,
    }
})