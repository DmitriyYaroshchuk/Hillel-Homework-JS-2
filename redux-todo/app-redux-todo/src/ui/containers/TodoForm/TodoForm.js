import React from "react";
import {addItem, todoSelectors} from "../../../engine/core/todoSlice";
import {useDispatch, useSelector} from "react-redux";
import {Form} from "react-final-form";
import Login from "./Login";

export default function TodoForm() {
    const dispatch = useDispatch();
    const items = useSelector(todoSelectors.items);
    const handleSubmit = (event) => {
        const text = event.todoInput;
        const newItems = [
            ...items,
            { id: Math.floor(Math.random() * 100), text }
        ];
        dispatch(addItem(newItems));
        localStorage.setItem('items', JSON.stringify(newItems));
        // event.todoInput = '';
    }
    return (
        <Form
            onSubmit={handleSubmit}
            render={Login}
        />
    )
}