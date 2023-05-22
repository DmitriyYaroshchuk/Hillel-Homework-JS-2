import React from "react";

export default class Count extends React.Component {
    render() {
        const { count } = this.props;
        return (
            <p className="count-click">{count}</p>
        )
    }
}