import Input from "../Input/Input";
import Button from "../Button/Button";
import React from "react";
import useStyles from "../TodoForm/useStyles";
import {Field} from "react-final-form";

const Login = (props) => {
    console.log(props);
    const { handleAdd, inputRef } = props;
    const classes = useStyles(props);
    return (
        <form className={classes.form} onSubmit={handleAdd}>
            <Field
                label="todoInput"
                component={(props) => <Input {...props} inputRef={inputRef}/>}
                type="text"
                name="todoInput"
                inputRef={inputRef}
            />
            <Button text="Добавить"/>
        </form>
    )
}
export default Login;