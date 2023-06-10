//_______Core_______//
import React from "react";
import cx from "classnames";

//_______Styles_______//
import useStyles from "./useStyles";


export default function Button(props) {
    const classes = useStyles(props);
    const { text, callHandleRemove, customClass, disabled } = props;
    const className = cx(`${classes['form__btn']}`, {[customClass]: customClass});
    return (
        <button
            onClick={callHandleRemove}
            type='submit'
            className={className}
            disabled={disabled}
        >
            {text}
        </button>
    )
}