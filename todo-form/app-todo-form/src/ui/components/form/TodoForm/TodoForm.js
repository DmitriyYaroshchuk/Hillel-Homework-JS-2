import React from "react";
import { Form } from "react-final-form";
import Login from "../Login/Login";


export default function TodoForm(props) {
    const { items, setItems } = props;
    const handleSubmit = (event) => {
        console.log('event: ', event);
        const text = event.todoInput;
        console.log('text: ',text);
        const newItems = [
            ...items,
            { id: Math.floor(Math.random() * 100), text }
        ];
        setItems(newItems);
        localStorage.setItem('items', JSON.stringify(newItems));
        event.todoInput = '';
    }
    return (
        <Form
            onSubmit={handleSubmit}
            render={Login}
            label="todoInput"
            name="todoInput"
            type="text"
        />
    )
}

