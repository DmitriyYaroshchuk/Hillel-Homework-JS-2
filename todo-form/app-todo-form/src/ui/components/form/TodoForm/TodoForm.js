//_______Core_______//
import React from "react";
import { Form } from "react-final-form";

//_______Components_______//
import Login from "../Login/Login";


export default function TodoForm(props) {
    const { items, setItems } = props;
    const handleSubmit = (event) => {
        const text = event.todoInput;
        const newItems = [
            ...items,
            { id: Math.floor(Math.random() * 100), text }
        ];
        setItems(newItems);
        localStorage.setItem('items', JSON.stringify(newItems));
        event.todoInput = '';
        console.log('props: ', props);
        console.log('eventSubmit: ', event);
        console.log('text: ',text);
    }
    return (
        <Form
            onSubmit={handleSubmit}
            render={Login}
        />
    )
}

