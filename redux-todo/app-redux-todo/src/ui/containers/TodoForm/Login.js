import useStyles from "./useStyles";
import {Field} from "react-final-form";
import Input from "../../components/form/Input/Input";
import Button from "../../components/form/Button/Button";

const Login = (props) => {
    const {handleSubmit, errors, pristine, form} = props;

    const classes = useStyles(props);
    const isRequired = value => value ? undefined : 'ОБЯЗАТЕЛЬНОЕ ПОЛЕ';
    const minLength = min => value =>
        value.length >= min ? undefined : `Минимальная длина ${min} символов`;

    const composeValidators = (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined);
    return (
        <form
            className={classes.form}
            onSubmit={event => {
                handleSubmit(event);
                form.reset();
            }}
        >
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