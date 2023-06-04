import React, {useRef, useState} from "react";
import Button from "../../form/Button/Button";
import Input from "../../form/Input/Input";
import ButtonSave from "../ButtonSave/ButtonSave";
import ButtonEdit from "../ButtonEdit/ButtonEdit";
import CheckBox from "../CheckBox/CheckBox";
import useStyles from "./useStyles";


export default function TodoItem(props) {
    const classes = useStyles(props);
    const { text, id, handleRemove, handleEditing } = props;
    const [hide, setHide] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
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
    const changeCheckbox = () => {
        setIsChecked(!isChecked);
    }

    const onClick = () => handleRemove(id);
    return (
        <div className={`${classes['todo-item']} ${isChecked ? classes['todo-item--checked'] : ''}`}>
            {
                hide ? <Input text={text} type='text' name='todo-name-editing' required={true} inputRef={inputRef}/> : <div className={`
                ${classes['todo-item__description']}
                ${classes['todo-item--checked .todo-item__description']}
                `}>{text}</div>
            }
            {
                hide ? <ButtonSave saveChanges={saveChanges} customClass='todo-item__button-save'/> :
                    <>
                        <ButtonEdit showContent={showContent}/>
                        <Button onClick={onClick} text="Удалить" customClass={`${classes['todo-item__delete']}`}/>
                        <CheckBox changeCheckbox={changeCheckbox} isChecked={isChecked}/>
                    </>
            }
        </div>
    )
}