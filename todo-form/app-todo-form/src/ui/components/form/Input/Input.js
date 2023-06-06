import React from "react";
import cx from "classnames";
import useStyles from "./useStyles";


export default function Input(props) {
    const classes = useStyles(props);
    const { text, type, name, required, inputRef, customClass, isChecked, changeCheckbox } = props;
    const className = cx(`${classes['form__input']}`, {[customClass]: customClass});
    return (
        <input defaultValue={text}
               type={type}
               name={name}
               required={required}
               className={className}
               ref={inputRef}
               checked={isChecked}
               onChange={changeCheckbox}
        />
    )
}