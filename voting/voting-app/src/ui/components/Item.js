import React from "react";
import Button from "./Button";
import Count from "./Count";

export default class Item extends React.Component {
    render() {
        const { id, text, increaseVote } = this.props;
        const onClick = () => increaseVote(id);
        return (
            <li>
                <Button onClick={onClick} id={id} text={text}/>
                <Count text={onClick[id]}/>
            </li>
        )
    }
}