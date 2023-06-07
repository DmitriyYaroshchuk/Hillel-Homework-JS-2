import React, { useState} from "react";
import {Form} from "react-final-form";
import Button from "../../form/Button/Button";

import ButtonSave from "../ButtonSave/ButtonSave";
import ButtonEdit from "../ButtonEdit/ButtonEdit";
import CheckBox from "../CheckBox/CheckBox";
import useStyles from "./useStyles";
import useStylesBtnSave from "../ButtonSave/useStyles";
import Login from "../../form/Login/Login";



export default function TodoItem(props) {
    const classes = useStyles(props);
    const classBtnSave = useStylesBtnSave(props);
    const {text, id, handleRemove, handleEditing} = props;
    const [hide, setHide] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const showContent = () => {
        setHide(!hide);
    }
    const saveChanges = (event) => {
        console.log('eventSaveChanges', event)
        const currentText = event.target.value;
        console.log(event.target)
        console.log('textSaveChanges: ', currentText);
        handleEditing(id, currentText);
        showContent();
    }
    const changeCheckbox = () => {
        setIsChecked(!isChecked);
    }
    const  handleSubmit = (event) => {
        console.log(event)
    }

    // const onClick = () => handleRemove(id);
    return (
        <div className={`${classes['todo-item']} ${isChecked ? classes['todo-item--checked'] : ''}`}>
            {
                hide ? <Form
                        onSubmit={handleSubmit}
                        render={Login}
                        text={text}
                        name='todoInputEditing'
                        required={true}
                    /> :
                    <div className={`${classes['todo-item__description']}`}>{text}</div>
            }
            {
                hide ? <ButtonSave
                        saveChanges={saveChanges}
                        customClass={`${classBtnSave['todo-item__button-save']}`}
                    /> :
                    <>
                        <ButtonEdit showContent={showContent}/>
                        {/*<Button onClick={onClick}*/}
                        {/*        text="Удалить"*/}
                        {/*        customClass={`${classes['todo-item__delete']}`}*/}
                        {/*/>*/}
                        <CheckBox changeCheckbox={changeCheckbox} isChecked={isChecked}/>
                    </>
            }
        </div>
    )
}
// <Field text={text}
//        name='todoInputEditing'
//        required={true}
// />
