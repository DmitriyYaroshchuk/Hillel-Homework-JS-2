import React from "react";
import cx from "classnames";

export default class LabelInput extends React.Component {
    render() {
        const {  customClass, type, name, placeholder } = this.props;
        const className = cx("form__input", {
            [customClass]: customClass
        })
        return (
            <label className="form__label">
                <input className={className} type={type} name={name} placeholder={placeholder} required/>
            </label>
        )
    }
}