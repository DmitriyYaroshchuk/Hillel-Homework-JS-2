import React from "react";
import cx from "classnames";

export default function Input(props) {
    const { value, type, name, required, customClass, isChecked, changeCheckbox, onChange } = props;
    const className = cx('form__input', { [customClass]: customClass })
    return (
        <input value={value}
               type={type}
               name={name}
               required={required}
               className={className}
               checked={isChecked}
               onChange={changeCheckbox} //onChange
        />
    )
}