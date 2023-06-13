import Input from "../components/form/Input";
import React from "react";
import Button from "../components/form/Button";

export default function TodoForm(props) {
    const { handleAdd, inputRef } = props;
    return (
        <form className="form" onSubmit={handleAdd}>
            <Input type='text' name='todo-name' required={true} inputRef={inputRef}/>
            <Button text="Добавить"/>
        </form>
    )

}