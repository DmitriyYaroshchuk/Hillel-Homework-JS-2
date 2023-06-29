import {Field} from "react-final-form";
import Input from "../../form/Input/Input";
import ButtonSave from "../ButtonSave/ButtonSave";
import useStylesBtnSave from "../ButtonSave/useStyles";
import useStyles from "./useStyles";

const LoginItem = props => {
    const { handleSubmit, text, pristine, errors } = props;
    const classes = useStyles(props);
    const classBtnSave = useStylesBtnSave(props);
    const isRequired = value => value ? undefined : 'ОБЯЗАТЕЛЬНОЕ ПОЛЕ';
    const minLength = min => value =>
        value.length >= min ? undefined : `Минимальная длина ${min} символов`;
    const composeValidators = (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined);

    return (
        <form
            className={`${classes['todo-item__editing']}`}
            onSubmit={handleSubmit}
        >
            <Field
                label="todoInputEdit"
                name="todoInputEdit"
                text={text}
                type="text"
                placeholder="Введите отредактированный текст"
                component={Input}
                validate={composeValidators(isRequired, minLength(5))}
                initialValue={text}
            />
            <ButtonSave
                customClass={`${classBtnSave['todo-item__button-save']}`}
                disabled={pristine || Object.values(errors).length}
            />
        </form>
    )
}
export default LoginItem;