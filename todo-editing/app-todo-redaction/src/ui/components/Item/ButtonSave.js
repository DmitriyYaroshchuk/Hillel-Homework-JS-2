import React from "react";
import cx from "classnames";
export default class ButtonSave extends React.Component {
    render() {
        const { customClass, saveChanges } = this.props;
        const className = cx('form__btn', {[customClass]: customClass})
        return (
            <button onClick={saveChanges} className={className}>Save</button>
        )
    }
}