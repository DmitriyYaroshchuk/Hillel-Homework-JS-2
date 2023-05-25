import React from "react";

class Input extends React.Component {
    render() {
        const { text } = this.props;
        return (
            <input defaultValue={ text } type="text" name="value" required className="form__input"/>
        )
    }
}
export default Input;