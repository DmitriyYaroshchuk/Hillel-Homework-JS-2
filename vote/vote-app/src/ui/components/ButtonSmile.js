import React from "react";

export default class ButtonSmile extends React.Component {
    render() {
            const { id, smile, onClick } = this.props;
        return (
            <button onClick={onClick} className="button" id={id}>{smile}</button>
        )
    }
}