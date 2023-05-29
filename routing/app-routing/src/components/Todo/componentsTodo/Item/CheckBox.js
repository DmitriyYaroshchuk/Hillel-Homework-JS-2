import React from "react";
import InputTodo from "../form/InputTodo";

export default function CheckBox(props) {
    const { isChecked, changeCheckbox } = props;
    return (
        <label className='todo-item__container-field'>

            <InputTodo customClass='todo-item__checkbox'
                   type='checkbox'
                   name='checkbox'
                   isChecked={isChecked}
                   changeCheckbox={changeCheckbox}
            />

            <span className='todo-item__span'></span>
        </label>

    )
}