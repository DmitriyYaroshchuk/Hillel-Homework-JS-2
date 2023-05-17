import React from "react";

export default class Count extends React.Component {
    render() {
        const { text } = this.props;
        return (
            <p className="count-click">{text}</p>
        )
    }
}