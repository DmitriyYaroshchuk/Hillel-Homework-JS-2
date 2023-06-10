//_______Core_______//
import React from "react";
import cx from "classnames";

//_______Styles_______//
import useStyles from "./useStyles";


export default function Input(props) {
    const {type, name, customClass, isChecked, changeCheckbox, text, placeholder, input, meta,} = props;
    console.log(props);
    // console.log('meta: ', meta);
    // console.log('input: ', input);
    const classes = useStyles(props);
    const className = cx(`${classes['form__input']}`, {[customClass]: customClass});
    const error = meta.error && meta.touched
    return (
        <>
            <input value={text}
                   type={type}
                   name={name}
                   className={className}
                // checked={isChecked}
                // onChange={changeCheckbox}
                   placeholder={placeholder}
                   {...input}
                   onError={error}
            />
        </>
    )
}