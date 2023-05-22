import React from "react";
export default class Winner extends React.Component {
    render() {
        const { text } = this.props;
        return (
            <div className="block-winner">{text}</div>
        )
    }
}