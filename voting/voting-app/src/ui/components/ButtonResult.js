import React from "react";
export default class ButtonResult extends React.Component {
    render() {
        const { checkWinner } = this.props;
        return (
            <button onClick={checkWinner}  className="button-result">Result</button>
        )
    }
}