//_______Core_______//
import React, {useState} from "react";
import {Field, Form} from "react-final-form";

//_______Components_______//
import Button from "../../form/Button/Button";
import ButtonSave from "../ButtonSave/ButtonSave";
import ButtonEdit from "../ButtonEdit/ButtonEdit";
import Input from "../../form/Input/Input";

//_______Styles_______//
import useStyles from "./useStyles";
import useStylesBtnSave from "../ButtonSave/useStyles";


export default function TodoItem(props) {
    const classes = useStyles(props);
    const classBtnSave = useStylesBtnSave(props);
    const {text, id, handleRemove, handleEditing} = props;
    const [hide, setHide] = useState(false);
    const showContent = () => {
        setHide(!hide);
    }
    const saveChanges = (event) => {
        const currentText = event.target.previousSibling.value;
        handleEditing(id, currentText);
        showContent();
    }
    const showResult = (event) => {
        console.log('showResult: ', event)
    }

    const callHandleRemove = () => handleRemove(id);
    const isRequired = value => value ? undefined : 'ОБЯЗАТЕЛЬНОЕ ПОЛЕ';
    const minLength = min => value =>
        value.length >= min ? undefined : `Минимальная длина ${min} символов`;

    const composeValidators = (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined);

    return (
        <div className={`${classes['todo-item']}`}>
            {
                hide ? <Form
                        onSubmit={showResult}
                        render={({handleSubmit, pristine, errors}) => (
                            <form
                                className={`${classes['todo-item__editing']}`}
                                onSubmit={handleSubmit}
                            >
                                <Field
                                    label="todoInputEditing"
                                    name="todoInputEditing"
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
                        <Button callHandleRemove={callHandleRemove}
                                text="Удалить"
                                customClass={`${classes['todo-item__delete']}`}
                        />
                        <Form
                            onSubmit={showResult}
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

