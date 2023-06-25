import Button from "../../form/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {addItem, hideItem, removeItem, todoSelectors, toggleCheckBox} from "../../../../engine/core/todoSlice";
import {Field, Form} from "react-final-form";
import useStyles from "./useStyles";
import Input from "../../form/Input/Input";
import useStylesBtnSave from "../ButtonSave/useStyles";
import ButtonSave from "../ButtonSave/ButtonSave";
import ButtonEdit from "../ButtonEdit/ButtonEdit";
export default function TodoItem(props) {
    const { text, id, hide, check } = props;
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
    const saveChanges = (values) => {
        const { todoInputEdit } = values;
        handleEdit(id, todoInputEdit);
        showContent();
    }
    const handleRemove = () => {
       dispatch(removeItem(id));
       const newItems = items.filter(item => item.id !== id);
       localStorage.setItem('items', JSON.stringify(newItems));
    }
    const onChangeCheckbox = () => {
       dispatch(toggleCheckBox({ id, checked: !check }))
    }
    const isRequired = value => value ? undefined : 'ОБЯЗАТЕЛЬНОЕ ПОЛЕ';
    const minLength = min => value =>
        value.length >= min ? undefined : `Минимальная длина ${min} символов`;
    const composeValidators = (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined);
    return (
        <div className={`${classes['todo-item']} ${check ? classes['todo-item--checked'] : ''}`}>
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
                                    customClass={`${classBtnSave['todo-item__button-save']}`}
                                    disabled={pristine || Object.values(errors).length}
                                />
                            </form>
                        )}
                    /> :
                    <div className={`${classes['todo-item__description']} ${check ? classes['todo-item__description--checked'] : ''}`}>{text}</div>
            }
            {
                hide ? undefined :
                    <>
                        <ButtonEdit showContent={showContent}/>
                        <Button onClick={handleRemove}
                                text="Удалить"
                                customClass={`${classes['todo-item__delete']}`}
                        />

                        <label className={`${classes['todo-item__checkbox']}`}>
                            <input
                                onChange={onChangeCheckbox}
                                type="checkbox"
                                className={`${classes['todo-item__input-checkbox']}`}
                                name="todoCheckBox"
                            />
                        </label>
                    </>
            }
        </div>
    )
}