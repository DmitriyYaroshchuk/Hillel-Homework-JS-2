//_______Core_______//
import React from "react";
import {Field} from "react-final-form";

//_______Components_______//
import Input from "../Input/Input";
import Button from "../Button/Button";

//_______Styles_______//
import useStyles from "../TodoForm/useStyles";


const Login = (props) => {
    const { handleSubmit, errors, pristine } = props;
    console.log('errors: ', errors)

    const classes = useStyles(props);
    const isRequired = value => value ? undefined : 'ОБЯЗАТЕЛЬНОЕ ПОЛЕ';
    const minLength = min => value =>
        value.length >= min ? undefined : `Минимальная длина ${min} символов`;

    const composeValidators = (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined);
    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <Field
                label="todoInput"
                name="todoInput"
                type="text"
                component={Input}
                placeholder="Введите текст"
                validate={composeValidators(isRequired, minLength(5))}
            />
            <Button text="Добавить" disabled={pristine || Object.values(errors).length}/>
        </form>
    )
}
export default Login;

