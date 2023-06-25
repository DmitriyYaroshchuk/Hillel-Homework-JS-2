import Button from "../../form/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {addItem, hideItem, removeItem, todoSelectors} from "../../../../engine/core/todoSlice";
import {Field, Form} from "react-final-form";
import useStyles from "./useStyles";
import Input from "../../form/Input/Input";
import useStylesBtnSave from "../ButtonSave/useStyles";
import ButtonSave from "../ButtonSave/ButtonSave";
import ButtonEdit from "../ButtonEdit/ButtonEdit";




export default function TodoItem(props) {
    const { text, id, hide } = props;
    const dispatch = useDispatch();
    const items = useSelector(todoSelectors.items);
    const classes = useStyles(props);
    const classBtnSave = useStylesBtnSave(props);
    const handleEdit = (id, newText) => {
        const updatedItems = items.map(item => {
            if (item.id === id) {
                return {...item, text: newText}
            }
            return item
        })
        dispatch(addItem(updatedItems));
        localStorage.setItem('items', JSON.stringify(updatedItems));
    }
    const showContent = () => {
        dispatch(hideItem({ id, hide: !hide }))
    }
    const saveChanges = (event) => {
        const currentText = event.target.previousSibling.value;
        console.log(event.target);
        console.log(currentText);
        handleEdit(id, currentText);
        showContent();
    }
    const handleRemove = () => {
       dispatch(removeItem(id));
       const newItems = items.filter(item => item.id !== id);
       localStorage.setItem('items', JSON.stringify(newItems));
    }
    const onSubmit = event => {
        console.log(event)
    }
    const isRequired = value => value ? undefined : 'ОБЯЗАТЕЛЬНОЕ ПОЛЕ';
    const minLength = min => value =>
        value.length >= min ? undefined : `Минимальная длина ${min} символов`;
    const composeValidators = (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined);
    return (
        <div className={`${classes['todo-item']}`}>
            {
                hide ? <Form
                        onSubmit={saveChanges}
                        render={({handleSubmit, pristine, errors}) => (
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
                                    saveChanges={saveChanges}
                                    customClass={`${classBtnSave['todo-item__button-save']}`}
                                    disabled={pristine || Object.values(errors).length}
                                />
                            </form>
                        )}
                    /> :
                    <div className={`${classes['todo-item__description']}`}>{text}</div>
            }
            {
                hide ? undefined :
                    <>
                        <ButtonEdit showContent={showContent}/>
                        <Button onClick={handleRemove}
                                text="Удалить"
                                customClass={`${classes['todo-item__delete']}`}
                        />
                        <Form
                            onSubmit={onSubmit}
                            render={({handleSubmit}) => (
                                <form className={`${classes['todo-item__checkbox']}`} onSubmit={handleSubmit}>
                                    <Field
                                        customClass={`${classes['todo-item__input-checkbox']}`}
                                        label="todoCheckBox"
                                        name="todoCheckBox"
                                        type="checkbox"
                                        component={Input}
                                    />
                                </form>
                            )}
                        >
                        </Form>
                    </>
            }
        </div>
    )
}