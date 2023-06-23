import {Field} from "react-final-form";
import Input from "../../components/form/Input/Input";
import useStyles from "../../components/Item/TodoItem/useStyles";

const LoginCheckbox = props => {
    const { handleSubmit } = props;
    const classes = useStyles(props);
    return (
        <form className={`${classes['todo-item__checkbox']}`} onSubmit={handleSubmit}>
            <Field
                customClass={`${classes['todo-item__input-checkbox']}`}
                label="todoCheckBox"
                name="todoCheckBox"
                type="checkbox"
                component={Input}
            />
        </form>
    )
}
export default LoginCheckbox;