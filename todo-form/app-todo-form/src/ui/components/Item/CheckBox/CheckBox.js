import React from "react";
import Input from "../../form/Input/Input";
import useStyles from "./useStyles";

export default function CheckBox(props) {
    const classes = useStyles(props);
    const { isChecked, changeCheckbox } = props;
    return (
        <label>
            <Input customClass={`${classes['todo-item__checkbox']}`}
                   type='checkbox'
                   name='checkbox'
                   isChecked={isChecked}
                   changeCheckbox={changeCheckbox}
            />

            <span className={`${classes['todo-item__span']}`}></span>
        </label>

    )
}