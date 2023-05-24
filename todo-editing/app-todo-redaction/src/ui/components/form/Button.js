import React from "react";
import cx from "classnames";

class Button extends React.Component {
    render() {
        const { text, onClick, customClass } = this.props;
        const className = cx('form__btn', {[customClass]: customClass})
        return (
            <button onClick={onClick} type='submit' className={className}>{text}</button>
        )
    }
}
export default Button;