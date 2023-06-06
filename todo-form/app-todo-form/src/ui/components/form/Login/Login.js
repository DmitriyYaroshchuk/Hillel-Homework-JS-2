import Input from "../Input/Input";
import Button from "../Button/Button";
import React from "react";
import useStyles from "../TodoForm/useStyles";
import {Field} from "react-final-form";

const Login = (props) => {
    const { handleAdd, inputRef, values, pristine, submitting } = props;
    console.log('Login-props: ', props);
    console.log('Values: ', values, 'Pristine: ', pristine, 'Submitting :', submitting)
    const classes = useStyles(props);
    return (
        <form className={classes.form} onSubmit={handleAdd}>
            <Field
                label="todoInput"
                name="todoInput"
                component={(props) =>
                    <Input
                        {...props}
                        inputRef={inputRef}
                    />}
            />
            <Button text="Добавить"/>
        </form>
    )
}
export default Login;
