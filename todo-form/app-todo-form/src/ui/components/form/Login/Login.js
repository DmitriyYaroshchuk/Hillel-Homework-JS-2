import Input from "../Input/Input";
import Button from "../Button/Button";
import React from "react";
import useStyles from "../TodoForm/useStyles";
import useStylesBtnDelete from "../../Item/TodoItem/useStyles"
import {Field} from "react-final-form";

const Login = (props) => {
    const { handleSubmit, values, pristine, submitting, label, name, type, required } = props;
    const classes = useStyles(props);
    const classesBtnDelete = useStylesBtnDelete(props);
    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <Field
                label={label}
                name={name}
                type={type}
                required={required}
                component={Input}
            />
            <Button text="Добавить"/>
            <Button onClick={onClick}
                    text="Удалить"
                    customClass={`${classesBtnDelete['todo-item__delete']}`}
            />
        </form>
    )
}
export default Login;
