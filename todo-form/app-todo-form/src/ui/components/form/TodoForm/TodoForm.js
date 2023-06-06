import React from "react";
import { Form } from "react-final-form";
import Login from "../Login/Login";


export default function TodoForm(props) {
    const { handleAdd } = props;
    const handleSubmit = () => {
        handleAdd()
    }
    return (
        <Form
            onSubmit={handleSubmit}
            render={Login}
        />
    )

}

