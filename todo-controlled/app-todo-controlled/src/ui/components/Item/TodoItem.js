import React, {useState} from "react";
import Button from "../form/Button"
import Input from "../form/Input";
import ButtonSave from "./ButtonSave";
import ButtonEdit from "./ButtonEdit";
import CheckBox from "./CheckBox";
import {useFormField} from "../../hooks/useFormField";


export default function TodoItem(props) {
    const { text, id, handleRemove, handleEditing, } = props;
    const [hide, setHide] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const todoInput = useFormField(text);
    const showContent = () => {
        setHide(!hide);
    }

    const saveChanges = () => {
        const currentText = todoInput.value;
        console.log('text: ', currentText);
        handleEditing(id, currentText);
        showContent();
    }
    const changeCheckbox = () => {
        setIsChecked(!isChecked);
    }

    const onClick = () => handleRemove(id);
    return (
        <div className={`todo-item ${isChecked ? 'todo-item--checked' : ''}`}>
            {
                hide ? <Input value={todoInput.value}
                              onChange={todoInput.onChange}
                              type='text'
                              name='todo-name-editing'
                              required={true}
                /> : <div className="todo-item__description">{text}</div>
            }
            {
                hide ? <ButtonSave saveChanges={saveChanges} customClass='todo-item__button-save'/> :
                    <>
                        <ButtonEdit showContent={showContent}/>
                        <Button onClick={onClick}
                                text="Удалить"
                                customClass="todo-item__delete"
                        />
                        <CheckBox onChange={changeCheckbox} isChecked={isChecked}/>
                    </>
            }
        </div>
    )
}