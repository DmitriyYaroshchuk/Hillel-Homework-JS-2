import React from "react";
import ButtonSmile from "./ButtonSmile";
import Count from "./Count";

export default class Item extends React.Component {
    render() {
        const { id, smile, count, increaseVote } = this.props;
        const onClick = () => increaseVote(id);
        return (
            <li>
                <ButtonSmile onClick={onClick} id={id} smile={smile}/>
                <Count count={count}/>
            </li>
        )
    }
}