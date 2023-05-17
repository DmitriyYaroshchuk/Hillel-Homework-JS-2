import React from "react";

export default class Button extends React.Component {
    render() {
            const { id, text } = this.props;
        return (
            <button className="button" id={id}>{text}</button>
        )
    }
}