import React from "react";
import cx from "classnames";
import useStyles from "./useStyles";


export default function Button(props) {
    const classes = useStyles(props);
    const { text, onClick, customClass } = props;
    const className = cx(`${classes['form__btn']}`, {[customClass]: customClass});
    return (
        <button onClick={onClick} type='submit' className={className}>{text}</button>
    )
}