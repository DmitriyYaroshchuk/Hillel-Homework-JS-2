import React from "react";
import cx from "classnames";

export default function Button(props) {
    const { text, onClick, customClass } = props;
    const className = cx('form__btn', {[customClass]: customClass});
    return (
        <button onClick={onClick} type='submit' className={className}>{text}</button>
    )
}