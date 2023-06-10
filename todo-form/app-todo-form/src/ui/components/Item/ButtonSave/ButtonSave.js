//_______Core_______//
import React from "react";
import cx from "classnames";

//_______Styles_______//
import useStyles from "../../form/Button/useStyles";


export default function ButtonSave(props) {
    const classes = useStyles(props)
    const { customClass, saveChanges } = props;
    const className = cx(`${classes['form__btn']}`, {[customClass]: customClass})
    return (
        <button onClick={saveChanges} className={className}>Save</button>
    )
}