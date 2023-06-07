import React from "react";
import { Form } from "react-final-form";
import Login from "../Login/Login";


export default function TodoForm(props) {
    console.log('TodoFormProps :',props)
    const { items, setItems } = props;
    const handleSubmit = (event) => {
        console.log('event: ', event);
        event.preventDefault();
        const text = event.target.elements.todoInput.value;
        console.log('text: ',text)
        const newItems = [
            ...items,
            { id: Math.floor(Math.random() * 100), text }
        ];
        setItems(newItems);
        localStorage.setItem('items', JSON.stringify(newItems));
    }
    return (
        <Form
            onSubmit={handleSubmit}
            render={Login}
        />
    )
}

