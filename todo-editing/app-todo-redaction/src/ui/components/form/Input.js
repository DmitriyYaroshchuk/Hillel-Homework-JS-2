import React from "react";

class Input extends React.Component {
    render() {
        const { editableText } = this.props;
        return (
            <input defaultValue={ editableText } type="text" name="value" required className="form__input"/>
        )
    }
}
export default Input;