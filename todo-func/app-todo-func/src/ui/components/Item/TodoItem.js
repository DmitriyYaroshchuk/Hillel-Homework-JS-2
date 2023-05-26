import React, {useRef, useState} from "react";
import Button from "../form/Button";
import Input from "../form/Input";
import ButtonSave from "./ButtonSave";
import ButtonEdit from "./ButtonEdit";


export default function TodoItem(props) {
    const { text, id, handleRemove, handleEditing } = props;
    const [hide, setHide] = useState(false);
    const inputRef = useRef(null);
    const showContent = () => {
        setHide(!hide);
    }
    const saveChanges = () => {
        const currentText = inputRef.current.value;
        console.log('text: ', currentText);
        handleEditing(id, currentText);
        showContent();
    }

    const onClick = () => handleRemove(id);
    return (
        <div className="todo-item">
            {
                hide ? <Input text={text} type='text' name='todo-name-editing' required={true} inputRef={inputRef}/> : <div className="todo-item__description">{text}</div>
            }
            {
                hide ? <ButtonSave saveChanges={saveChanges} customClass='todo-item__button-save'/> :
                    <>
                        <ButtonEdit showContent={showContent}/>
                        <Button onClick={onClick} text="Удалить" customClass="todo-item__delete"/>
                        <div className="todo-item__container-field">
                            <Input type='checkbox' name='checkbox' customClass='todo-item__checkbox'/>
                            <span className='todo-item__span'></span>
                        </div>
                    </>
            }
        </div>
    )
}