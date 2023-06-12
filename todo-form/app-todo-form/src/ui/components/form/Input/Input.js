//_______Core_______//
import React from "react";
import cx from "classnames";

//_______Styles_______//
import useStyles from "./useStyles";


export default function Input(props) {
    const {type, name, customClass, text, placeholder, input, meta} = props;
    const classes = useStyles(props);
    const className = cx(`${classes['form__input']}`, {[customClass]: customClass});
    const error = (meta) => meta.error && meta.touched
    return (
        <>
            <input value={text}
                   type={type}
                   name={name}
                   className={className}
                   placeholder={placeholder}
                   {...input}
                   onError={error}

            />
            {meta.error && meta.touched && <span style={{ fontWeight: 400, color: 'red' }}>{meta.error}</span>}
        </>
    )
}