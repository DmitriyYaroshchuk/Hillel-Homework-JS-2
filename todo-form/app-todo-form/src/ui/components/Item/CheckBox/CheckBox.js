//_______Core_______//
import React from "react";

//_______Components_______//
import Input from "../../form/Input/Input";

//_______Styles_______//
import useStyles from "./useStyles";

export default function CheckBox(props) {
    const classes = useStyles(props);
    const { label, name, type } = props;
    return (
        <label>
            <Input customClass={`${classes['todo-item__checkbox']}`}
                   label={label}
                   type={type}
                   name={name}
                   // isChecked={isChecked}
                   // changeCheckbox={changeCheckbox}
            />

            {/*<span className={`${classes['todo-item__span']}`}></span>*/}
        </label>

    )
}