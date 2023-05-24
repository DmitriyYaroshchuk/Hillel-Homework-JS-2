import React from "react";
import cx from "classnames";
export default class ButtonSave extends React.Component {
    render() {
        const { customClass } = this.props;
        const className = cx('form__btn', {[customClass]: customClass})
        return (
            <button className={className}>Save</button>
        )
    }
}