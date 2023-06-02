import React from "react";
import Input from "../form/Input";

export default function CheckBox(props) {
    const { isChecked, onChange } = props;
    return (
        <label className='todo-item__container-field'>
            <Input customClass='todo-item__checkbox'
                   type='checkbox'
                   name='checkbox'
                   isChecked={isChecked}
                   onChange={onChange}
            />
            <span className='todo-item__span'></span>
        </label>
    )
}