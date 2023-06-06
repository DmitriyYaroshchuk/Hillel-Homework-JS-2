import React from "react";
import { Form } from "react-final-form";
import Login from "../Login/Login";

export default function TodoForm(props) {

    const { handleAdd, inputRef } = props;
    return (
        <Form
            onSubmit={handleAdd}
            render={(props) => <Login {...props} inputRef={inputRef} />}
        />

    )

}