import React from "react";
import cx from "classnames";
import useStyles from "./useStyles";


export default function Input(props) {
    const classes = useStyles(props);
    const {type, name, required, customClass, isChecked, changeCheckbox, input, text} = props;
    const className = cx(`${classes['form__input']}`, {[customClass]: customClass});
    return (

        <input defaultValue={text}
               type={type}
               name={name}
               required={required}
               className={className}
               checked={isChecked}
               onChange={changeCheckbox}
               {...input}
        />


    )
}