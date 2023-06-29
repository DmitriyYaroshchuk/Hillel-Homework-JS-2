import React from "react";
import cx from "classnames";
import useStyles from "./useStyles";

export default function Button(props) {
    const { text, onClick, customClass, disabled } = props;
    const classes = useStyles(props);
    const className = cx(`${classes['form__btn']}`, {[customClass]: customClass});
    return (
        <button
            onClick={onClick}
            type='submit'
            className={className}
            disabled={disabled}
        >
            {text}
        </button>
    )
}