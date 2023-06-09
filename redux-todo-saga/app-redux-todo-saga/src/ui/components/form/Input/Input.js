import React from "react";
import cx from "classnames";
import useStyles from "./useStyles";

export default function Input(props) {
    const { text, type, name, customClass, meta, input } = props;
    const classes = useStyles(props);
    const className = cx(`${classes['form__input']}`, { [customClass]: customClass });
    return (
        <>
            <input value={text}
                   type={type}
                   name={name}
                   className={className}
                   {...input}
            />
            {meta.error && meta.touched && !meta.pristine && <span style={{ fontWeight: 400, color: 'red' }}>{meta.error}</span>}
        </>
    )
}