import React from "react";
import cx from "classnames";
import './ButtonSave.css';

export default function ButtonSave(props) {
    const { customClass, saveChanges } = props;
    const className = cx('form__btn', {[customClass]: customClass})
    return (
        <button onClick={saveChanges} className={className}>Save</button>
    )
}