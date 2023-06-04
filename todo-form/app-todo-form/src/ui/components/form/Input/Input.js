import React from "react";
import cx from "classnames";
import './Input.css'

export default function Input(props) {
    const { text, type, name, required, inputRef, customClass, isChecked, changeCheckbox } = props;
    const className = cx('form__input', { [customClass]: customClass })
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