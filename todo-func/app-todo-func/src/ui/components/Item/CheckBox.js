import React from "react";
import Input from "../../../../../../../todo-func/app-todo-func/src/ui/components/form/Input";

export default function CheckBox(props) {
    const { isChecked, changeCheckbox } = props;
    return (
        <label className='todo-item__container-field'>

            <Input customClass='todo-item__checkbox'
                   type='checkbox'
                   name='checkbox'
                   isChecked={isChecked}
                   changeCheckbox={changeCheckbox}
            />

            <span className='todo-item__span'></span>
        </label>

    )
}