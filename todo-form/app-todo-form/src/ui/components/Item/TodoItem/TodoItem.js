//_______Core_______//
import React, {useState} from "react";
import {Field, Form} from "react-final-form";

//_______Components_______//
import Button from "../../form/Button/Button";
import ButtonSave from "../ButtonSave/ButtonSave";
import ButtonEdit from "../ButtonEdit/ButtonEdit";
import CheckBox from "../CheckBox/CheckBox";
import Input from "../../form/Input/Input";

//_______Styles_______//
import useStyles from "./useStyles";
import useStylesBtnSave from "../ButtonSave/useStyles";


export default function TodoItem(props) {
    const classes = useStyles(props);
    const classBtnSave = useStylesBtnSave(props);
    const {text, id, handleRemove, handleEditing} = props;
    const [hide, setHide] = useState(false);
    // const [isChecked, setIsChecked] = useState(false);
    const showContent = () => {
        setHide(!hide);
    }
    const saveChanges = (event) => {
        console.log('eventSaveChanges', event)
        const currentText = event.target.previousSibling.value;
        console.log(event.target)
        console.log('textSaveChanges: ', currentText);
        handleEditing(id, currentText);
        showContent();
    }
    // const changeCheckbox = () => {
    //     setIsChecked(!isChecked);
    // }
    const showResult = (event) => {
        console.log('showResult: ', event)
    }

    const callHandleRemove = () => handleRemove(id);
    return (
        // <div className={`${classes['todo-item']} ${isChecked ? classes['todo-item--checked'] : ''}`}>
        <div className={`${classes['todo-item']}`}>
            {
                hide ? <Form
                        onSubmit={showResult}
                        render={({handleSubmit}) => (
                            <form className={`${classes['todo-item__editing']}`} onSubmit={handleSubmit}>
                                <Field
                                    label="todoInputEditing"
                                    name="todoInputEditing"
                                    text={text}
                                    type="text"
                                    placeholder="Введите отредактированный текст"
                                    component={Input}
                                />
                                <ButtonSave
                                    saveChanges={saveChanges}
                                    customClass={`${classBtnSave['todo-item__button-save']}`}
                                    // disabled={prisitne}
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
                            {/*<CheckBox changeCheckbox={changeCheckbox} isChecked={isChecked}/>*/}

                        </Form>
                    </>
            }
        </div>
    )
}

