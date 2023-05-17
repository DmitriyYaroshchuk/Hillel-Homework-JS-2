import React from "react";

export default class Button extends React.Component {
    render() {
            const { id, text, onClick } = this.props;
        return (
            <button onClick={onClick} className="button" id={id}>{text}</button>
        )
    }
}