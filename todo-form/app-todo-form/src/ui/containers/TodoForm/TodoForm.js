import Input from "../../components/form/Input/Input";
import React from "react";
import Button from "../../components/form/Button/Button";
import useStyles from "./useStyles";

export default function TodoForm(props) {
    const classes = useStyles(props);
    const { handleAdd, inputRef } = props;
    return (
        <form className={classes.form} onSubmit={handleAdd}>
            <Input type='text' name='todo-name' required={true} inputRef={inputRef}/>
            <Button text="Добавить"/>
        </form>
    )

}