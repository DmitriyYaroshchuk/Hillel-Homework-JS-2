import Input from "../Input/Input";
import Button from "../Button/Button";
import React from "react";
import useStyles from "../TodoForm/useStyles";
import {Field} from "react-final-form";

const Login = (props) => {
    const { handleSubmit, values, pristine, submitting } = props;
    console.log('handleSubmit', handleSubmit);
    console.log('Login-props: ', props);
    console.log('Values: ', values, 'Pristine: ', pristine, 'Submitting :', submitting);
    const classes = useStyles(props);
    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <Field
                label="todoInput"
                name="todoInput"
                type="text"
                component={Input}
            />
            <Button text="Добавить"/>
        </form>
    )
}
export default Login;
